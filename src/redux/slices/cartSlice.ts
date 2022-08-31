import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export type CartItemType={
    id:string;
    imageUrl:string;
    title:string;
    count:number;
    price:number;
    
    
}
interface CartSliceType{
  items:CartItemType[];
  totalPrice:number;
}
const initialState:CartSliceType = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    
    addItem: (state, action: PayloadAction<CartItemType>) => {
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
    minusItem: (state, action: PayloadAction<string>) => {
      const thisItem = state.items.find((obj) => obj.id === action.payload);
      if (thisItem&&thisItem.count > 0) {
        thisItem.count--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
    removeItem: (state, action: PayloadAction<CartItemType>) => {
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
export const setCart = (state:RootState) => state.cart;
export const currentCardItem = (id:string) => (state:RootState) =>
  state.cart.items.find((item) => item.id === id);
export const { addItem, minusItem, removeItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
