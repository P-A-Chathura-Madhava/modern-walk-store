import Image from 'next/image'
import React from 'react'
import mensClothing from "@/assets/mens-clothing.jpg";

function CategoriesCard() {
  return (
    <div
    className="bg-slate-600 flex justify-center group cursor-pointer"
  >
    <Image className='group-hover:opacity-80 duration-300' src={mensClothing} alt='clothing-category' height={200}/>
    <h2 className="text-white text-4xl font-bold absolute bottom-[-30px] bg-slate-600 p-2 bg-opacity-70 group-hover:text-[38px] duration-300">Men's Clothing</h2>
  </div>
  )
}

export default CategoriesCard