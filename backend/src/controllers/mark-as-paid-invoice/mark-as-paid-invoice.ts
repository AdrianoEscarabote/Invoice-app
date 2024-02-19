import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  IMarkAsPaidInvoiceRepository,
  MarkAsPaidInvoiceParams,
  MarkAsPaidInvoiceReturn,
} from "./protocols"
import { badRequest, notFound, ok } from "../helpers"

export class MarkAsPaidController implements IController {
  constructor(
    private readonly markAsPaidInvoiceRepository: IMarkAsPaidInvoiceRepository,
  ) {}
  async handle(
    HttpRequest: HttpRequest<MarkAsPaidInvoiceParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<MarkAsPaidInvoiceReturn | string>> {
    try {
      if (!HttpRequest.body?.id || !HttpRequest.body?.invoiceId)
        return badRequest("id not found")

      const user = await this.markAsPaidInvoiceRepository.MarkAsPaid(
        HttpRequest.body,
      )

      if (!user.success) return notFound()

      return ok(user.success)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
