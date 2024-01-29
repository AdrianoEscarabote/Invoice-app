import {
  DeleteInvoiceParams,
  DeleteInvoiceReturn,
  IDeleteInvoiceRepository,
} from "@/controllers/delete-invoice/protocols"
import { MongoClient } from "@/database/mongo"
import { MongoUser } from "../mongo-protocols"
import { ObjectId } from "mongodb"

export class DeleteInvoiceRepository implements IDeleteInvoiceRepository {
  async deleteInvoice(
    params: DeleteInvoiceParams,
  ): Promise<DeleteInvoiceReturn> {
    if (!params.invoiceId || !params.id)
      throw new Error("params is not present")

    const filter = {
      _id: new ObjectId(params.id),
    }

    const deleteInvoice = await MongoClient.db
      .collection<MongoUser>("users")
      .findOneAndUpdate(filter, {
        $pull: {
          invoices: {
            id: params.invoiceId,
          },
        },
      })

    if (!deleteInvoice)
      return {
        success: false,
      }

    return {
      success: true,
    }
  }
}
