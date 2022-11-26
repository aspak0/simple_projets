// basically we can organaise our store data in small pieces (redux slice method);
//maintenence and complexity  is eassy;

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* 
    Redux - core
    return [...state, action.payload];
    */
    //Using state  directly because  we have createSlice  feature;
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      console.log(state.cart);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectCart = (state) => state.cart;
export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;