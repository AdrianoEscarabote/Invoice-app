export interface InvoiceTypes {
  id: string
  clientName: string
  clientEmail: string
  createdAt: string
  paymentDue: string
  desription: string
  paymentTerms: "1" | "7" | "14" | "30"
  status: "Pending" | "Paid" | "Draft"
  senderAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  clientAddress: {
    street: string
    city: string
    postCode: string
    country: string
  }
  items: [
    {
      name: string
      quantity: number
      price: number
      total: number
    },
  ]
  total: number
}
