// productSlice.js
const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: () => {},
    deleteProduct: () => {},
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
