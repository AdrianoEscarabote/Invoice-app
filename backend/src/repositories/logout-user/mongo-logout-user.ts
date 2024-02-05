import {
  ILogoutUserRepository,
  LogoutUserParams,
  LogoutUserReturn,
} from "@/controllers/logout-user/protocols"
import { MongoClient } from "@/database/mongo"
import { ObjectId } from "mongodb"
import { MongoUser } from "../mongo-protocols"

export class LogoutUserRepository implements ILogoutUserRepository {
  async logoutUser(params: LogoutUserParams): Promise<LogoutUserReturn> {
    if (!params.id) {
      throw new Error("id not found!")
    }
    const filter = {
      _id: new ObjectId(params.id),
    }
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne(filter)
    if (!user) {
      throw new Error("user not found")
    }
    return {
      success: true,
    }
  }
}
