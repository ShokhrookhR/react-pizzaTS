import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategoryId, setCategoryId } from '../../redux/slices/filterSlice';

const Categories: React.FC= React.memo(() => {
  const categoryId = useSelector(getCategoryId);
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();

  return (
    <div className={'categories'}>
      <ul>
        {categories.map((p:any, i:number) => (
          <li
            onClick={() => dispatch(setCategoryId(i))}
            key={i}
            className={categoryId === i ? 'active' : ''}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
