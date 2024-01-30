import { Response } from "express"
import { HttpRequest, HttpResponse, IController } from "../protocols"
import { UserTypes } from "@/models/User"
import { Conflict, badRequest, registered } from "../helpers"
import { ISignupUserRepository, SignupUserParams } from "./protocols"
import validator from "validator"
import { Secret, sign } from "jsonwebtoken"
import { setCookies } from "@/utils/setcookies"

export class SignupUserController implements IController {
  constructor(private readonly ISignupUserRepository: ISignupUserRepository) {}

  async handle(
    httpRequest: HttpRequest<SignupUserParams>,
    res: Response<unknown>,
  ): Promise<HttpResponse<UserTypes | string>> {
    try {
      const requiredFields = ["email", "password", "confirm_password"]

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof SignupUserParams]?.length) {
          return badRequest(`Field ${field} is required!`)
        }
      }

      const emailIsValid = validator.isEmail(httpRequest?.body!.email)

      if (!emailIsValid) {
        return badRequest("E-mail is invalid!")
      }

      if (
        !httpRequest?.body?.password ||
        !httpRequest?.body?.confirm_password
      ) {
        return badRequest("Password is invalid!")
      }

      const user = await this.ISignupUserRepository.signupUser(httpRequest.body)

      const secret = process.env.SECRET as Secret

      const token = sign(
        {
          id: user.id,
        },
        secret,
      )

      setCookies(res, user.id, token)

      return registered<UserTypes>(user)
    } catch (error) {
      return Conflict()
    }
  }
}
