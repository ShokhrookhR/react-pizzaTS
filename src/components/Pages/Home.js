import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import axios from 'axios';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
const Home = () => {
  
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [selectedSort, setSelectedSort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const onClickCategory = (id) => {
    setSelectedCategory(id);
  };
  const onSelectSort = (i) => {
    setSelectedSort(i);
  };
  React.useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory('');
    }
    setIsLoading(true);
    axios
      .get(
        `https://62deabb69c47ff309e797094.mockapi.io/items?category=${selectedCategory}&sortBy=${selectedSort.sortProperty.replace(
          '-',
          '',
        )}&order=${selectedSort.sortProperty.includes('-') ? 'asc' : 'desc'}`,
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [selectedCategory, selectedSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={selectedCategory} onSelect={(id) => onClickCategory(id)} />
        <Sort value={selectedSort} onSelect={(i) => onSelectSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((p) => <PizzaBlock {...p} key={p.id} />)}
      </div>
    </div>
  );
};

export default Home;
