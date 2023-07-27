import React from 'react';
import './styles/Card.css';

const Card = ({ original_title, poster_path }) => {
  const urrl = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
  return (
    <div className="card">
      <div className="foto"><img src={urrl} height= '200rem'></img></div>
      <p>{original_title}</p>
    </div>
  );
};

export default Card;
