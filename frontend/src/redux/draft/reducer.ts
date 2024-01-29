import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataTypes } from "../redux-types";
import { initialState } from "./initialState";

const draftSlice = createSlice({
  name: "draftSlice",
  initialState,
  reducers: {
    saveDraft: (state, action: PayloadAction<dataTypes>) => {
      state.data = action.payload;
    },
    setHasSavedDraft: (state) => {
      state.hasSavedData = true;
    },
    cleanDraft: (state) => {
      state.hasSavedData = false;
      state = initialState;
    },
  },
});

export default draftSlice.reducer;
export const { cleanDraft, saveDraft, setHasSavedDraft } = draftSlice.actions;
