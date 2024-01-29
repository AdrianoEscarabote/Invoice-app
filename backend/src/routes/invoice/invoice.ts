import express from "express"
import createInvoiceRoute from "./create-invoice"
import EditInvoiceRoute from "./edit-invoice"
import DeleteInvoiceRoute from "./delete-invoice"
import getInvoicesRoute from "./get-invoices"

const InvoiceRouter = express.Router()

InvoiceRouter.use("/create-invoice", createInvoiceRoute)
InvoiceRouter.use("/edit-invoice", EditInvoiceRoute)
InvoiceRouter.use("/delete-invoice", DeleteInvoiceRoute)
InvoiceRouter.use("/get-invoices", getInvoicesRoute)

export default InvoiceRouter
