import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;
