import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

const Categories = (props) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const categories = useSelector((state) => state.filter.categories);
  const dispatch = useDispatch();

  return (
    <div className={'categories'}>
      <ul>
        {categories.map((p, i) => (
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
};

export default Categories;
