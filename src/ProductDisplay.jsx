import React from 'react'
import { ProductCard } from './ProductCard'

const drinkFlavors = [
  {
    id: 1,
    name: "Chocolate",
    img: "./Pineapple.png",
    bgImg: "/images/bg-chocolate.jpg",
    pngImg: "./pineapple-pieces.png"
  },
  {
    id: 2,
    name: "Strawberry",
    img: "./Pineapple.png",
    bgImg: "/images/bg-strawberry.jpg",
    pngImg: "./pineapple-pieces.png"
  },
  {
    id: 3,
    name: "Mango",
    img: "./Pineapple.png",
    bgImg: "/images/bg-mango.jpg",
    pngImg: "./pineapple-pieces.png"
  },
  {
    id: 4,
    name: "Vanilla",
    img: "./Pineapple.png",
    bgImg: "/images/bg-vanilla.jpg",
    pngImg: "./pineapple-pieces.png"
  },
  {
    id: 5,
    name: "Pineapple",
    img: "./Pineapple.png",
    bgImg: "/images/bg-pineapple.jpg",
    pngImg: "./pineapple-pieces.png"
  },
  {
    id: 6,
    name: "Blueberry",
    img: "./Pineapple.png",
    bgImg: "/images/bg-blueberry.jpg",
    pngImg: "./pineapple-pieces.png"
  }
]

const ProductDisplay = () => {
  return (
    <div className="w-full min-h-screen bg-red-500 px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drinkFlavors.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductDisplay
