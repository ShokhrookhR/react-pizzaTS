import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const AboutPizza: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<{
    imageUrl:string,
    title:string,
  }>();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        let { data } = await axios.get(`https://62deabb69c47ff309e797094.mockapi.io/items/${id}`);
        setData(data);
      } catch (error) {
        alert('Пицц нет');
      }
    }
    fetchPizza();
  }, [id]);
  if (!data) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="container">
      <div>
        <img src={data.imageUrl} alt="pizza" />
      </div>
      <div>{data.title}</div>
    </div>
  );
};

export default AboutPizza;
