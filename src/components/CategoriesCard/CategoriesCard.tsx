import Image from 'next/image'
import React from 'react'
import mensClothing from "@/assets/mens-clothing.jpg";

function CategoriesCard() {
  return (
    <div
    className="bg-slate-600 flex justify-center"
  >
    <Image src={mensClothing} alt='clothing-category' height={200}/>
    <h2 className="text-white text-4xl font-bold absolute bottom-[-30px] bg-slate-600 p-2 bg-opacity-70">Men's Clothing</h2>
  </div>
  )
}

export default CategoriesCard