import './scss/app.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';
import AboutPizza from './components/Pages/AboutPizza';
import MainLayout from './layouts/MainLayout';
export const SearchContext = React.createContext();
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart/*" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pizza/:id" element={<AboutPizza />} />
      </Route>
    </Routes>
  );
}

export default App;
