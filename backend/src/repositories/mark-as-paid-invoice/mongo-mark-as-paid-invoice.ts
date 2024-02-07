import {
  IMarkAsPaidInvoiceRepository,
  MarkAsPaidInvoiceParams,
  MarkAsPaidInvoiceReturn,
} from "@/controllers/mark-as-paid-invoice/protocols"
import { MongoClient } from "@/database/mongo"
import { MongoUser } from "../mongo-protocols"
import { ObjectId } from "mongodb"

export class MarkAsPaidInvoiceRepository
  implements IMarkAsPaidInvoiceRepository
{
  async MarkAsPaid(
    params: MarkAsPaidInvoiceParams,
  ): Promise<MarkAsPaidInvoiceReturn> {
    if (!params.id || !params.invoiceId) {
      throw new Error("params not found")
    }

    const filter = {
      _id: new ObjectId(params.id),
    }

    const findUser = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne(filter)

    if (!findUser) throw new Error("user not found")

    const updateUser = await MongoClient.db
      .collection<MongoUser>("users")
      .findOneAndUpdate(
        filter,
        {
          $set: {
            invoices: findUser.invoices.map((invoice) => {
              if (invoice.id === params.invoiceId) {
                invoice.status = "Paid"
              }
              return invoice
            }),
          },
        },
        {
          returnDocument: "after",
        },
      )

    if (!updateUser) throw new Error("user not updated")

    return {
      success: true,
    }
  }
}
