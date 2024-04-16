/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react"


const App = () => {
  const [data , setData]= useState ([]);
  useEffect(() =>{
    const fetchData= async () =>{
      const response = await fetch(' https://api.escuelajs.co/api/v1/products' );
      const jsonData= await response.json();
      setData(jsonData);
    };
    fetchData();
  },[])
  return (
<div className=" bg-slate-400 w-full min-h-screen ">
      <h2 className="text-5xl font-bold text-white text-center py-8 font-serif">Products</h2>
    <div className= " w-[90%] mx-auto my-auto bg-slate-400 p-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-16 gap-y-8 ">
      {data && data.map((randomData) =>(
  <div className="w-72 min-h-56 bg-zinc-300 p-4 shadow-md " key={randomData.id}>
       <img src={randomData.images} alt="" /> 
       <h2 className="text-2xl text-slate-900 font-serif mt-2">{randomData.title}</h2>
        <h3 className="text-slate-800 text-3xl font-bold mt-4 ">${randomData.price}</h3>
        </div>
))}

</div>

</div>
  )
}

export default App