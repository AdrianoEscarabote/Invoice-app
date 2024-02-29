import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { InvoiceTypes } from "./InvoiceDataTypes";

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    editSelectedInvoice: (state, action: PayloadAction<InvoiceTypes>) => {
      const { ...props } = action.payload;
      state.selectedInvoice = {
        ...props,
      };
    },
    setInvoices: (state, action: PayloadAction<InvoiceTypes[]>) => {
      const newInvoices = action.payload;
      if (newInvoices.length > 0) {
        state.invoices = newInvoices;
      }
    },
    markAsPaid: (state) => {
      state.selectedInvoice.status = "Paid";
      state.invoices = state.invoices.map((invoice) => {
        if (invoice.id === state.selectedInvoice.id) {
          invoice.status = "Paid";
        }
        return invoice;
      });
    },
    deleteInvoice: (state) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== state.selectedInvoice.id
      );
    },
    createInvoice: (state, action: PayloadAction<InvoiceTypes>) => {
      state.invoices.push(action.payload);
    },
    selectInvoice: (
      state,
      action: PayloadAction<{
        index: number;
      }>
    ) => {
      const properties = state.invoices[action.payload.index];
      state.selectedInvoice = {
        ...properties,
      };
    },
  },
});

export default invoiceSlice.reducer;

export const {
  setInvoices,
  markAsPaid,
  deleteInvoice,
  createInvoice,
  selectInvoice,
  editSelectedInvoice,
} = invoiceSlice.actions;
