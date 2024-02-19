import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import {
  ILogoutUserRepository,
  LogoutUserParams,
  LogoutUserReturn,
} from "./protocols"
import { badRequest, notFound, ok } from "../helpers"

export class LogoutUserController implements IController {
  constructor(private readonly logoutUserRepository: ILogoutUserRepository) {}
  async handle(
    HttpRequest: HttpRequest<LogoutUserParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<LogoutUserReturn | string>> {
    try {
      if (!HttpRequest.body?.id) {
        return badRequest("id not found")
      }
      const user = await this.logoutUserRepository.logoutUser(HttpRequest.body)
      if (!user) {
        return notFound()
      }
      return ok(user.success)
    } catch (error) {
      return badRequest(error as string)
    }
  }
}
