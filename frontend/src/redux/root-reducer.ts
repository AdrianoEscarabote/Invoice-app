import { combineReducers } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/reducer";
import draftSlice from "./draft/reducer";

const rootReducer = combineReducers({
  invoiceSlice,
  draftSlice,
});

export default rootReducer;
