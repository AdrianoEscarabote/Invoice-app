import { InvoiceTypes } from "@/models/Invoice"

export interface GetInvoicesParams {
  id: string
}

export interface GetInvoicesReturn {
  invoices: InvoiceTypes[]
}

export interface IGetInvoicesRepository {
  GetInvoices(params: GetInvoicesParams): Promise<GetInvoicesReturn>
}
