import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import { ILoginUserRepository, LoginUserParams } from "./protocols"
import { badRequest, logged, notFound } from "../helpers"
import { UserTypes } from "@/models/User"
import validator from "validator"
import { Secret, sign } from "jsonwebtoken"
import { setCookies } from "@/utils/setcookies"

export class LoginUserController implements IController {
  constructor(private readonly loginUserRepository: ILoginUserRepository) {}

  async handle(
    httpRequest: HttpRequest<LoginUserParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<UserTypes | string>> {
    try {
      const requiredFields = ["email", "password"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof LoginUserParams]?.length) {
          return badRequest(`Field ${field} is required!`)
        }
      }

      const emailIsValid = validator.isEmail(httpRequest?.body!.email)

      if (!emailIsValid) {
        return badRequest("E-mail is invalid!")
      }

      if (!httpRequest?.body?.password) {
        return badRequest("Password is invalid!")
      }

      const user = await this.loginUserRepository.loginUser(httpRequest.body)

      const secret = process.env.SECRET as Secret

      const token = sign(
        {
          id: user.id,
        },
        secret,
      )

      setCookies(res, user.id, token)

      return logged<UserTypes>(user)
    } catch (error) {
      console.error(error)
      return notFound()
    }
  }
}
