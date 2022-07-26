import './scss/app.scss';
import Header from './components/Header/Header';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Cart from './components/Pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart/*" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
