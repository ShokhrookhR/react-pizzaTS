import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  sorts: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  // sortItems: [
  //   { name: 'популярности(ASC)', sortProperty: '-rating' },
  //   { name: 'популярности(DESC)', sortProperty: 'rating' },
  //   { name: 'цене(ASC)', sortProperty: '-price' },
  //   { name: 'цене(DESC)', sortProperty: 'price' },
  //   { name: 'алфавиту(ASC)', sortProperty: '-title' },
  //   { name: 'алфавиту(DESC)', sortProperty: 'title' },
  // ],
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

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
