import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import axios from 'axios';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
import { useSelector } from 'react-redux';

const Home = (props) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const selectedSort = useSelector((state) => state.filter.sorts);
  const searchValue = useSelector((state) => state.search.value);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : '';
    const sortBy = selectedSort.sortProperty.replace('-', '');
    const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
    // if (!selectedCategory) {
    //   setSelectedCategory('');
    // }
    setIsLoading(true);
    axios
      .get(
        `https://62deabb69c47ff309e797094.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, selectedSort]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((p) => <PizzaBlock {...p} key={p.id} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />) : pizzas}
      </div>
    </div>
  );
};

export default Home;
