import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, imageUr1 }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
    </div>
  )
}

export default Card
