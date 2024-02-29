import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  CreateInvoiceParams,
  CreateInvoiceReturn,
  ICreateInvoiceRepository,
} from "./protocols"
import { badRequest, ok } from "../helpers"

export class CreateInvoiceController implements IController {
  constructor(
    private readonly createInvoiceRepository: ICreateInvoiceRepository,
  ) {}

  async handle(
    HttpRequest: HttpRequest<CreateInvoiceParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<CreateInvoiceReturn | string>> {
    try {
      if (!HttpRequest?.body?.id || !HttpRequest.body.invoice) {
        return badRequest("data is not present!")
      }

      const createInvoice = await this.createInvoiceRepository.createInvoice(
        HttpRequest.body,
      )

      if (!createInvoice.success) {
        return badRequest("user has not been updated")
      }

      return ok(createInvoice.success)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
