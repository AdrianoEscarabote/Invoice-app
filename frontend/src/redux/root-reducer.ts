import { combineReducers } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/reducer";

const rootReducer = combineReducers({
  invoiceSlice,
});

export default rootReducer;
