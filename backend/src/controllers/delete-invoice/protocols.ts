export interface DeleteInvoiceParams {
  id: string
  invoiceId: string
}

export interface DeleteInvoiceReturn {
  success: boolean
}

export interface IDeleteInvoiceRepository {
  deleteInvoice(params: DeleteInvoiceParams): Promise<DeleteInvoiceReturn>
}
