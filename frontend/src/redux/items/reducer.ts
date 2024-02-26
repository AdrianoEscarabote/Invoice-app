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
    setItems: (state, action: PayloadAction<{ items: ItemTypes[] }>) => {
      const { items } = action.payload;
      if (items) state.splice(0, state.length, ...items);
    },
    removeItem: (state, action: PayloadAction<{ index: number }>) => {
      return state.filter((_, idx) => idx !== action.payload.index);
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
      return [...state, action.payload];
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
      const newState = state.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            [field]: valueString ?? valueNumber ?? item[field],
            total:
              field === "price" || field === "quantity"
                ? item.price * item.quantity
                : 0,
          };
        }
        return item;
      });
      return newState;
    },
    cleanItems: () => {
      return [{ name: "New Item", price: 0.0, quantity: 0.0, total: 0.0 }];
    },
  },
});

export default itemsSlice.reducer;
export const { setItems, removeItem, addItem, cleanItems, handleChangeValue } =
  itemsSlice.actions;
