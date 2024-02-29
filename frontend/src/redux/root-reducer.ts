import { combineReducers } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/reducer";
import itemsSlice from "./items/reducer";

const rootReducer = combineReducers({
  invoiceSlice,
  itemsSlice,
});

export default rootReducer;
