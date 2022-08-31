import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params: Record<string, string>) => {
    const { category, sortBy, order } = params;
    const { data } = await axios.get(
      `https://62deabb69c47ff309e797094.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    );
    return data as PizzaItemType[];
  },
);
export const fetchCurrentPizza = createAsyncThunk<PizzaItemType,string>('pizza/fetchCurrentPizza', async (id: string) => {
  const { data } = await axios.get(`https://62deabb69c47ff309e797094.mockapi.io/items/${id}`);
  return data;
});

export type PizzaItemType = {
  id: string;
  imageUrl: string;
  title: string;
  count: number;
  price: number;
  types: number[];
  sizes: number[];
  rating: number;
};
type CurrentPizzaItemType = {
  imageUrl: string;
  title: string;
};
enum PizzaStatusEnum {
  LOADING='loading',
  SUCCESS='success',
  ERROR='error',
}

interface PizzaSliceType {
  items: PizzaItemType[];
  status: PizzaStatusEnum;
  item: CurrentPizzaItemType;
}

const initialState: PizzaSliceType = {
  items: [],
  status: PizzaStatusEnum.LOADING,
  item: {
    imageUrl: '',
    title: '',
  },
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = PizzaStatusEnum.LOADING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = PizzaStatusEnum.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = PizzaStatusEnum.ERROR;
      state.items = [];
    });
    builder.addCase(fetchCurrentPizza.pending, (state, action) => {
      state.status = PizzaStatusEnum.LOADING;
    });
    builder.addCase(fetchCurrentPizza.fulfilled, (state, action) => {
      state.status = PizzaStatusEnum.SUCCESS;
      state.item = action.payload;
    });
    builder.addCase(fetchCurrentPizza.rejected, (state, action) => {
      state.status = PizzaStatusEnum.ERROR;
      state.item = {
        imageUrl: '',
        title: '',
      };
    });
  },
});
export const setPizzaItems = (state: RootState) => state.pizza.items;
export const setPizzaStatus = (state: RootState) => state.pizza.status;
export const getItem = (state: RootState) => state.pizza.item;
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
