import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum{
  RATING_DESC='rating',
  RATING_ASC='-rating',
  PRICE_DESC='price',
  PRICE_ASC='-price',
  TITLE_DESC='title',
  TITLE_ASC='-title',
  
}
export type SortsType={
    name:string;
    sortProperty:SortPropertyEnum;
}

interface FilterSliceType{
  categories:string[];
  sorts:SortsType;
  categoryId:number;
}

const initialState:FilterSliceType = {
  categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  sorts: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<SortsType>) => {
      state.sorts = action.payload;
    },
  },
});
export const sorts = (state:RootState) => state.filter.sorts;
export const getCategories = (state:RootState) => state.filter.categories;
export const getCategoryId = (state:RootState) => state.filter.categoryId;
export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
