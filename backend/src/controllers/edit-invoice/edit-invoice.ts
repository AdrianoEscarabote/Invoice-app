import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  EditInvoiceParams,
  EditInvoiceReturn,
  IEditInvoiceRepository,
} from "./protocols"
import { badRequest, ok } from "../helpers"

export class EditInvoiceController implements IController {
  constructor(private readonly EditInvoiceRepository: IEditInvoiceRepository) {}

  async handle(
    HttpRequest: HttpRequest<EditInvoiceParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<EditInvoiceReturn | string>> {
    try {
      if (!HttpRequest?.body?.id || !HttpRequest.body.invoice) {
        return badRequest("data is not present!")
      }

      const editInvoice = await this.EditInvoiceRepository.EditInvoice(
        HttpRequest.body,
      )

      if (!editInvoice.success) {
        return badRequest("user has not been updated")
      }

      return ok(editInvoice.success)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
