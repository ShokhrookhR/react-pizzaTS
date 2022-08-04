import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    //   console.log(action.payload);
    // },
    // removeItem: (state, action) => {
    //   state.items = state.items.find((obj) => obj.id !== action.payload.id);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },
    addItem: (state, action) => {
      const thisItem = state.items.find((obj) => obj.id === action.payload.id);
      if (thisItem) {
        thisItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem: (state, action) => {
      const thisItem = state.items.find((obj) => obj.id === action.payload);
      if (thisItem.count > 0) {
        thisItem.count--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
