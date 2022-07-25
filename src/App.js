import './scss/app.scss';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import React from 'react';
import axios from 'axios';
function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://62deabb69c47ff309e797094.mockapi.io/items')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((p) => (
              <PizzaBlock {...p} key={p.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
