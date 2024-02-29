import { CreateInvoiceController } from "@/controllers/create-invoice/create-invoice"
import checkToken from "@/middleware/checktoken"
import { CreateInvoiceRepository } from "@/repositories/create-invoice/mongo-create-invoice"
import express, { Response, Request } from "express"

const CreateInvoiceRoute = express.Router()

CreateInvoiceRoute.post(
  "/",
  checkToken,
  async (req: Request, res: Response) => {
    const createInvoiceRepository = new CreateInvoiceRepository()

    const createInvoiceController = new CreateInvoiceController(
      createInvoiceRepository,
    )

    const bodyFormated = {
      id: req.cookies.id,
      invoice: req.body.invoice,
    }

    console.log("teste para ver o que está vindo", req.body.invoice)

    const { body, statusCode } = await createInvoiceController.handle(
      {
        body: bodyFormated,
      },
      res,
    )

    return res.status(statusCode).send(body)
  },
)

export default CreateInvoiceRoute
