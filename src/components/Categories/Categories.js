import React from 'react';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeList, setActiveList] = React.useState(0);
  const onClickActive = (list) => {
    setActiveList(list);
  };

  return (
    <div className={'categories'}>
      <ul>
        {categories.map((p, i) => (
          <li onClick={() => onClickActive(i)} key={i} className={activeList === i ? 'active' : ''}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
