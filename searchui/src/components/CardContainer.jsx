import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

const CardContainer = ({cardData}) => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={card.id} original_title={card.original_title} poster_path={card.poster_path} />
      ))}
    </div>
  );
};

export default CardContainer;
