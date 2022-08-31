import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface SearchSliceType{
  value: string;
}
const initialState:SearchSliceType = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const setSearch = (state:RootState) => state.search.value;
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
