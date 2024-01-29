import { InvoiceTypes } from "@/models/Invoice"

export interface CreateInvoiceParams {
  id: string
  invoice: InvoiceTypes
}

export interface CreateInvoiceReturn {
  success: boolean
}

export interface ICreateInvoiceRepository {
  createInvoice(params: CreateInvoiceParams): Promise<CreateInvoiceReturn>
}
