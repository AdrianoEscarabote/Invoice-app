import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemTypes {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

const initialState: ItemTypes[] = [];

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<{ index: number }>) => {
      state.splice(action.payload.index, 1);
    },
    addItem: (
      state,
      action: PayloadAction<{
        name: string;
        quantity: number;
        price: number;
        total: 0;
      }>
    ) => {
      state.push(action.payload);
    },
    handleChangeValue: (
      state,
      action: PayloadAction<{
        index: number;
        field: string;
        valueString?: string;
        valueNumber?: number;
      }>
    ) => {
      const { field, index, valueString, valueNumber } = action.payload;
      if (field === "name" && valueString) state[index][field] = valueString;

      if (field !== "name" && valueNumber)
        state[action.payload.index][action.payload.field] = valueNumber;
    },
    cleanItems: (state) => {
      state = [{ name: "", price: 0, quantity: 0, total: 0 }];
    },
  },
});

export default itemsSlice.reducer;
export const { removeItem, addItem, cleanItems, handleChangeValue } =
  itemsSlice.actions;
