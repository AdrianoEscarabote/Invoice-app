import { combineReducers } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice/reducer";
import draftSlice from "./draft/reducer";
import itemsSlice from "./items/reducer";

const rootReducer = combineReducers({
  invoiceSlice,
  draftSlice,
  itemsSlice,
});

export default rootReducer;
