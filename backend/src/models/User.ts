import { InvoiceTypes } from "./Invoice"

export interface UserTypes {
  email: string
  password: string
  id: string
  invoices: InvoiceTypes[]
}
