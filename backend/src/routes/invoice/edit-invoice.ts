import { EditInvoiceController } from "@/controllers/edit-invoice/edit-invoice"
import checkToken from "@/middleware/checktoken"
import { EditInvoiceRepository } from "@/repositories/edit-invoice/mongo-edit-invoice"
import express, { Request, Response } from "express"

const EditInvoiceRoute = express.Router()

EditInvoiceRoute.post("/", checkToken, async (req: Request, res: Response) => {
  const bodyFormated = {
    id: req.cookies.id,
    invoice: req.body.invoice,
  }

  const editInvoiceRepository = new EditInvoiceRepository()

  const editInvoiceController = new EditInvoiceController(editInvoiceRepository)

  const { statusCode, body } = await editInvoiceController.handle(
    {
      body: bodyFormated,
    },
    res,
  )

  return res.status(statusCode).send(body)
})

export default EditInvoiceRoute
