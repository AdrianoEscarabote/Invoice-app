import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  GetInvoicesParams,
  GetInvoicesReturn,
  IGetInvoicesRepository,
} from "./protocols"
import { badRequest, ok } from "../helpers"

export class GetInvoicesController implements IController {
  constructor(private readonly GetInvoicesRepository: IGetInvoicesRepository) {}

  async handle(
    HttpRequest: HttpRequest<GetInvoicesParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<GetInvoicesReturn | string>> {
    try {
      if (!HttpRequest.body?.id) {
        return badRequest("id not found")
      }

      const user = await this.GetInvoicesRepository.GetInvoices(
        HttpRequest.body,
      )

      if (!user.invoices) {
        return badRequest("empty invoice")
      }

      return ok(user.invoices)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
