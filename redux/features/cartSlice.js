// cartSlice.js
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: () => {},
    deleteCart: () => {},
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
