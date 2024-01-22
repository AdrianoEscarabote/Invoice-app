import {
  ILoginUserRepository,
  LoginUserParams,
  LoginUserReturnTypes,
} from "@/controllers/login-user/protocols"
import { MongoClient } from "@/database/mongo"
import { compare } from "bcrypt"
import { MongoUser } from "../mongo-protocols"

export class MongoLoginUserRepository implements ILoginUserRepository {
  async loginUser(params: LoginUserParams): Promise<LoginUserReturnTypes> {
    const user = await MongoClient.db.collection<MongoUser>("users").findOne({
      email: params.email,
    })

    if (user === null) {
      throw new Error("User does not exist!")
    }

    const checkPassowrd = await compare(
      params.password as string,
      user.password as string,
    )

    if (!checkPassowrd) {
      throw new Error("Invalid Password!")
    }

    const { _id } = user

    return {
      id: _id.toHexString(),
      success: true,
    }
  }
}
