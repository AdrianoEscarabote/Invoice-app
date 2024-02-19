import {
  CreateInvoiceParams,
  CreateInvoiceReturn,
  ICreateInvoiceRepository,
} from "@/controllers/create-invoice/protocols"
import { MongoClient } from "@/database/mongo"
import { ObjectId } from "mongodb"
import { MongoUser } from "../mongo-protocols"

export class CreateInvoiceRepository implements ICreateInvoiceRepository {
  async createInvoice(
    params: CreateInvoiceParams,
  ): Promise<CreateInvoiceReturn> {
    if (!params.id) {
      throw new Error("user id is required!")
    }

    const filter = {
      _id: new ObjectId(params.id),
    }

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne(filter)

    if (!user) throw new Error("User does not exist!")

    const updateUser = await MongoClient.db
      .collection<MongoUser>("users")
      .findOneAndUpdate(
        filter,
        {
          $set: {
            invoices: [...user.invoices, params.invoice],
          },
        },
        {
          returnDocument: "after",
        },
      )

    if (!updateUser) {
      throw new Error("User not updated!")
    }

    return {
      success: true,
    }
  }
}
