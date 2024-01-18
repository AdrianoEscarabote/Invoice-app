import { HttpRequest, HttpResponse, IController } from "../protocols"
import { badRequest, ok } from "../helpers"
import {
  ChecktokenParams,
  ChecktokenReturn,
  IChecktokenRepository,
} from "./protocols"
import { Response } from "express"

export class ChecktokenController implements IController {
  constructor(private readonly ChecktokenRespository: IChecktokenRepository) {}

  async handle(
    httpRequest: HttpRequest<ChecktokenParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<ChecktokenReturn | string>> {
    try {
      if (!httpRequest?.body?.token || !httpRequest?.body?.id) {
        return badRequest("Token not found!")
      }

      const { success } = await this.ChecktokenRespository.checkToken(
        httpRequest.body,
      )

      return ok<ChecktokenReturn>(success)
    } catch (error) {
      return badRequest("Token not found!")
    }
  }
}
