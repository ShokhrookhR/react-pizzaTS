import React from 'react';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import axios from 'axios';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../PizzaBlock/Skeleton';
import { SearchContext } from '../../App';
const Home = (props) => {
  const { searchValue } = React.useContext(SearchContext);
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
    const category = selectedCategory ? `category=${selectedCategory}` : '';
    const sortBy = selectedSort.sortProperty.replace('-', '');
    const order = selectedSort.sortProperty.includes('-') ? 'asc' : 'desc';
    if (!selectedCategory) {
      setSelectedCategory('');
    }
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
  }, [selectedCategory, selectedSort]);
  console.log(items);

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
        <Categories value={selectedCategory} onSelect={(id) => onClickCategory(id)} />
        <Sort value={selectedSort} onSelect={(i) => onSelectSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />) : pizzas}
      </div>
    </div>
  );
};

export default Home;
