import { MarkAsPaidController } from "@/controllers/mark-as-paid-invoice/mark-as-paid-invoice"
import checkToken from "@/middleware/checktoken"
import { MarkAsPaidInvoiceRepository } from "@/repositories/mark-as-paid-invoice/mongo-mark-as-paid-invoice"
import express from "express"

const MarkAsPaidInvoiceRoute = express.Router()

MarkAsPaidInvoiceRoute.post("/", checkToken, async (req, res) => {
  const markAsPaidInvoiceRepository = new MarkAsPaidInvoiceRepository()

  const markAsPaidInvoiceController = new MarkAsPaidController(
    markAsPaidInvoiceRepository,
  )

  const bodyFormated = {
    id: req.cookies.id,
    invoiceId: req.body.invoiceId,
  }

  const { body, statusCode } = await markAsPaidInvoiceController.handle(
    {
      body: bodyFormated,
    },
    res,
  )

  return res.status(statusCode).send(body)
})

export default MarkAsPaidInvoiceRoute
