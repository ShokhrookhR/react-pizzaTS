import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params, thunkApi) => {
  const { category, sortBy, order } = params;
  const { data } = await axios.get(
    `https://62deabb69c47ff309e797094.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: '',
  gogo: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setGogo(state, action) {
      state.gogo = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'OK';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'rejected';
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
