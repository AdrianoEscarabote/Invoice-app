import {
  EditInvoiceParams,
  EditInvoiceReturn,
  IEditInvoiceRepository,
} from "@/controllers/edit-invoice/protocols"
import { MongoClient } from "@/database/mongo"
import { MongoUser } from "../mongo-protocols"
import { ObjectId } from "mongodb"

export class EditInvoiceRepository implements IEditInvoiceRepository {
  async EditInvoice(params: EditInvoiceParams): Promise<EditInvoiceReturn> {
    if (!params.id) throw new Error("id is required!")

    const filter = {
      _id: new ObjectId(params.id),
    }

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne(filter)

    if (!user) throw new Error("user is not required")

    const { id } = params.invoice

    const index = user.invoices.findIndex((invoice) => invoice.id === id)

    if (user.invoices.length === 0)
      return {
        success: false,
      }

    const updateUser = await MongoClient.db
      .collection<MongoUser>("users")
      .findOneAndUpdate(filter, {
        $set: {
          [`invoices.${index}`]: params.invoice,
        },
      })

    if (!updateUser) return { success: false }

    return {
      success: true,
    }
  }
}
