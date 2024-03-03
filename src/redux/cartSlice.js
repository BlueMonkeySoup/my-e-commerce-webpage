import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity -= 1;
        if (state.products[productIndex].quantity === 0) {
          state.products.splice(productIndex, 1);
        }
        state.quantity -= action.payload.quantity;
        state.total -= action.payload.price;
      }
      if (state.quantity < 0) {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
      }
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
