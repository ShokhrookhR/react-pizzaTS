import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  sorts: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sorts = action.payload;
    },
  },
});
export const sorts = (state) => state.filter.sorts;
export const getCategories = (state) => state.filter.categories;
export const getCategoryId = (state) => state.filter.categoryId;
export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
