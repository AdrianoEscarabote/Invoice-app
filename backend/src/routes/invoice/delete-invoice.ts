import { DeleteInvoiceController } from "@/controllers/delete-invoice/delete-invoice"
import checkToken from "@/middleware/checktoken"
import { DeleteInvoiceRepository } from "@/repositories/delete-invoice/mongo-delete-invoice"
import express from "express"

const DeleteInvoiceRoute = express.Router()

DeleteInvoiceRoute.delete("/", checkToken, async (req, res) => {
  const deleteInvoiceRepository = new DeleteInvoiceRepository()

  const deleteInvoiceController = new DeleteInvoiceController(
    deleteInvoiceRepository,
  )

  const bodyFormated = {
    id: req.cookies.id,
    invoiceId: req.body.invoiceId,
  }

  const { body, statusCode } = await deleteInvoiceController.handle(
    {
      body: bodyFormated,
    },
    res,
  )
  return res.status(statusCode).send(body)
})

export default DeleteInvoiceRoute
