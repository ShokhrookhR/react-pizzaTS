import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const selectedSort = useSelector((state) => state.filter.sorts);
  const searchValue = useSelector((state) => state.search.value);
  const items = useSelector((state) => state.pizza.items);
  const status = useSelector((state) => state.pizza.status);

  const getPizzas = async () => {
    const category = categoryId ? `category=${categoryId}` : '';
    const sortBy = selectedSort.sortProperty.replace('-', '');
    const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(fetchPizzas({ category, sortBy, order }));
  };
  React.useEffect(() => {
    getPizzas();
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
        {status === 'loading' ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />) : pizzas}
      </div>
    </div>
  );
};

export default Home;
