import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, setPizzaItems, setPizzaStatus } from '../../redux/slices/pizzaSlice';
import { getCategoryId, sorts } from '../../redux/slices/filterSlice';
import { setSearch } from '../../redux/slices/searchSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(getCategoryId);
  const selectedSort = useSelector(sorts);
  const searchValue = useSelector(setSearch);
  const items = useSelector(setPizzaItems);
  const status = useSelector(setPizzaStatus);

  const getPizzas = async () => {
    const category = categoryId ? `category=${categoryId}` : '';
    const sortBy = selectedSort.sortProperty.replace('-', '');
    const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(
      //@ts-ignore
      fetchPizzas({ category, sortBy, order }));
  };
  React.useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, selectedSort]);

  const pizzas = items
    .filter((obj:any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((p:any) => <PizzaBlock {...p} key={p.id} />);
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
