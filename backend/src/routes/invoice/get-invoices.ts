import { GetInvoicesController } from "@/controllers/get-invoices/get-invoices"
import checkToken from "@/middleware/checktoken"
import { GetInvoicesRepository } from "@/repositories/get-invoices/mongo-get-invoices"
import express from "express"

const getInvoicesRoute = express.Router()

getInvoicesRoute.get("/", checkToken, async (req, res) => {
  const bodyFormated = {
    id: req.cookies.id,
  }

  const getInvoicesRepository = new GetInvoicesRepository()

  const getInvoicesController = new GetInvoicesController(getInvoicesRepository)

  const { body, statusCode } = await getInvoicesController.handle(
    {
      body: bodyFormated,
    },
    res,
  )

  return res.status(statusCode).send(body)
})

export default getInvoicesRoute
