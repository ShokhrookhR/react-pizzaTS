import React from 'react';

const Categories = (props) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={'categories'}>
      <ul>
        {categories.map((p, i) => (
          <li
            onClick={() => props.onSelect(i)}
            key={i}
            className={props.value === i ? 'active' : ''}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
