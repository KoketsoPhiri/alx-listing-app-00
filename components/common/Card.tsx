// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces'; // Adjust path if needed

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;