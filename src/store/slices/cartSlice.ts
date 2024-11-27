import { createSlice } from "@reduxjs/toolkit";

export interface IProductState {
  id: number;
  title: string;
  price: number;
  image: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as IProductState[],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
