import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  DeleteInvoiceParams,
  DeleteInvoiceReturn,
  IDeleteInvoiceRepository,
} from "./protocols"
import { badRequest, ok } from "../helpers"

export class DeleteInvoiceController implements IController {
  constructor(
    private readonly deleteInvoiceRepository: IDeleteInvoiceRepository,
  ) {}

  async handle(
    HttpRequest: HttpRequest<DeleteInvoiceParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<DeleteInvoiceReturn | string>> {
    try {
      if (!HttpRequest.body?.id || !HttpRequest.body.invoiceId)
        return badRequest("data is required")

      const invoiceDeleted = await this.deleteInvoiceRepository.deleteInvoice(
        HttpRequest.body,
      )

      if (!invoiceDeleted.success) return badRequest("invoice was not deleted")

      return ok(invoiceDeleted.success)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
