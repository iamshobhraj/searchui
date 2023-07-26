import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

const cardData = [
  { title: 'data 1', content: 'data 1 info' },
  { title: 'data 2', content: 'data 2 info' },
  { title: 'data 3', content: 'data 3 info' },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardContainer;
