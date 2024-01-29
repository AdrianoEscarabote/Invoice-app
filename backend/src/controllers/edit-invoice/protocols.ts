import { InvoiceTypes } from "@/models/Invoice"

export interface EditInvoiceParams {
  id: string
  invoice: InvoiceTypes
}

export interface EditInvoiceReturn {
  success: boolean
}

export interface IEditInvoiceRepository {
  EditInvoice(params: EditInvoiceParams): Promise<EditInvoiceReturn>
}
