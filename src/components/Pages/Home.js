import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import axios from 'axios';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get('https://62deabb69c47ff309e797094.mockapi.io/items')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((p) => <PizzaBlock {...p} key={p.id} />)}
      </div>
    </>
  );
};

export default Home;
