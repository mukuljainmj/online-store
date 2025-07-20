import { createSlice } from "@reduxjs/toolkit";
const initialState = null;
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
    updateStock(state, action) {
      const { id, stock } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.stock = stock;
      }
    },
  },
});

export const { setProducts, updateStock } = productsSlice.actions;

export default productsSlice.reducer;
