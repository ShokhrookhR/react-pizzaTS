// import axios from 'axios';
import React from 'react';
import {  useDispatch, useSelector,  } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrentPizza, getItem, setPizzaStatus } from '../../redux/slices/pizzaSlice';

const AboutPizza: React.FC = () => {
  const { id } = useParams();
  const item= useSelector(getItem)
  const status= useSelector(setPizzaStatus)
  const dispatch=useDispatch()
 
  React.useEffect(() => {
    try {
      dispatch(
        //@ts-ignore
        fetchCurrentPizza(id))
    } catch (error) {
      alert(error)
    }
  }, []);
  if (status==='loading') {
    return <div className={'container'}><h1>Загрузка...</h1></div>;
  }
  return (
    <div className="container">
      <div>
        <img src={item.imageUrl} alt="pizza" />
      </div>
      <div>{item.title}</div>
    </div>
  );
};

export default AboutPizza;
