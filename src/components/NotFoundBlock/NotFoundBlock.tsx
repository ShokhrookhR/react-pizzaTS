import React from 'react';
import s from './NotFoundBlock.module.scss';
const NotFoundBlock: React.FC = () => {
  return (
    <div className={s.body}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default NotFoundBlock;
