import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../root-reducer-types";

export const selectInvoicesCount = (rootReducer: rootState) => {
  return rootReducer.invoiceSlice.invoices.reduce(
    (accum, curr) => (accum += 1),
    0
  );
};

export const selectInvoicesCountFilteredFactory = (status: string) => {
  return createSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.invoices,
    (invoices) => {
      const filteredInvoices = invoices.filter(
        (invoice) => invoice.status === status
      );
      return filteredInvoices.reduce((accum, curr) => (accum += 1), 0);
    }
  );
};
