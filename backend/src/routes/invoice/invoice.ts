import express from "express"
import createInvoiceRoute from "./create-invoice"
import EditInvoiceRoute from "./edit-invoice"
import DeleteInvoiceRoute from "./delete-invoice"
import getInvoicesRoute from "./get-invoices"
import MarkAsPaidInvoiceRoute from "./mark-as-paid-invoice"

const InvoiceRouter = express.Router()

InvoiceRouter.use("/create-invoice", createInvoiceRoute)
InvoiceRouter.use("/edit-invoice", EditInvoiceRoute)
InvoiceRouter.use("/delete-invoice", DeleteInvoiceRoute)
InvoiceRouter.use("/get-invoices", getInvoicesRoute)
InvoiceRouter.use("/mark-as-paid-invoice", MarkAsPaidInvoiceRoute)

export default InvoiceRouter
