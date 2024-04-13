/* eslint-disable react/prop-types */
import Button from "./Button"

import { FaHeart } from "react-icons/fa6";

const Cards = ({productData}) => {
  return (
    <div key={productData.id} className= {`bg-slate-50 rounded-lg flex flex-col shadow-lg w-full p-4`}>
      <h2 className=" text-xl text-white bg-green-800 w-fit py-1 px-4 rounded-[3px]"> {productData.title} </h2>
    <img className="w-58 h-48" src={productData.img} alt="" />
    <h3 className="text-slate-600 mt-4"> {productData.subtitle}</h3>
    <h2 className="text-2xl font-semibold text-sky-700 mt-4">{productData.name}</h2>
    <div className="flex gap-7 mt-4 items-center"> <span className="text-xl font-bold ">{productData.price}</span> <span className="line-through  text-slate-600 font-semibold">{productData.edit_price}</span></div>

   <div className="flex gap-2 mt-4">
  <Button text={"Add to Cart"} />
  <button className="py-2 px-4 border border-slate-900 text-black bg-transparent" > <FaHeart />   </button> 
  <Button text={"View"} />
   </div>
    
    </div>
  )
}

export default Cards