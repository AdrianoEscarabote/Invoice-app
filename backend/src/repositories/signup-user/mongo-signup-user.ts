import { MongoClient } from "@/database/mongo"
import { MongoUser } from "../mongo-protocols"
import { genSalt, hash } from "bcrypt"
import {
  ISignupUserRepository,
  SignupUserParams,
  SignupUserReturnTypes,
} from "@/controllers/signup-user/protocols"

export class MongoSignupUserRepository implements ISignupUserRepository {
  async signupUser(params: SignupUserParams): Promise<SignupUserReturnTypes> {
    const userExists = await MongoClient.db.collection("users").findOne({
      email: params.email,
    })

    if (userExists) {
      throw new Error("This email is already being used")
    }

    const salt = await genSalt(12)
    const passwordHash = await hash(params.password, salt)

    const userData: MongoUser = {
      email: params.email,
      password: passwordHash,
      invoices: [],
    }

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(userData)

    const user = await MongoClient.db.collection<MongoUser>("users").findOne({
      _id: insertedId,
    })

    if (!user) {
      throw new Error("User not created")
    }

    const { _id } = user

    return { id: _id.toHexString(), success: true }
  }
}
