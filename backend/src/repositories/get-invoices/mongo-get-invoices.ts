import {
  GetInvoicesParams,
  GetInvoicesReturn,
  IGetInvoicesRepository,
} from "@/controllers/get-invoices/protocols"
import { MongoClient } from "@/database/mongo"
import { MongoUser } from "../mongo-protocols"
import { ObjectId } from "mongodb"

export class GetInvoicesRepository implements IGetInvoicesRepository {
  async GetInvoices(params: GetInvoicesParams): Promise<GetInvoicesReturn> {
    if (!params.id) throw new Error("id not found")

    const filter = {
      _id: new ObjectId(params.id),
    }

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne(filter)

    if (!user) throw new Error("user not found")

    if (user.invoices.length === 0) throw new Error("empty invoice")

    return {
      invoices: user.invoices,
    }
  }
}
