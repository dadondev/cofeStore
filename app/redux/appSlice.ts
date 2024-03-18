import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    selectedProducts: 0,
    allProducts: [
      { name: "Espresso", price: 4, isSelected: false, count: 0 },
      { name: "Latte", price: 8, isSelected: false, count: 0 },
      { name: "Cappuccino", price: 12, isSelected: false, count: 0 },
      { name: "Americano", price: 16, isSelected: false, count: 0 },
      { name: "Mocha", price: 20, isSelected: false, count: 0 },
      { name: "French Vanilla", price: 24, isSelected: false, count: 0 },
      { name: "Caramel Macchiato", price: 28, isSelected: false, count: 0 },
      { name: "Cold Brew", price: 32, isSelected: false, count: 0 },
      { name: "Iced Latte", price: 36, isSelected: false, count: 0 },
    ],
  },
  reducers: {
    selectedProducts(state) {
      state.selectedProducts = state.allProducts.reduce(
        (acc, e) => acc + e.count,
        0
      );
    },
    selectProduct(state, { payload }) {
      const obj = state.allProducts.find((e) => e.name === payload.name);
      if (obj?.name) {
        obj.isSelected = true;
        obj.count = payload.count;
        console.log(obj.count);
      }
      state.selectedProducts = state.allProducts.reduce(
        (acc, e) => acc + e.count,
        0
      );
    },
  },
});

export default appSlice;
