export interface MarkAsPaidInvoiceParams {
  id: string
  invoiceId: string
}

export interface MarkAsPaidInvoiceReturn {
  success: boolean
}

export interface IMarkAsPaidInvoiceRepository {
  MarkAsPaid(params: MarkAsPaidInvoiceParams): Promise<MarkAsPaidInvoiceReturn>
}
