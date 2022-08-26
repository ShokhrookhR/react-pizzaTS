import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const setSearch = (state) => state.search.value;
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
