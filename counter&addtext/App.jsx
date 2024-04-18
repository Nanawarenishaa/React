/* eslint-disable no-unused-vars */
import { useState } from "react"


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [count,setcount]=useState(0);
  const add= () =>{
     setcount(count+1);
  }
  const minus= () =>{
    setcount(count-1);
  }
  const [inputValue,setValue]=useState("");
  const [changeValue,setchangeValue]=useState("");
   const addtext = (e) =>{
    setValue(e.target.value);
   }
   const addContent = () =>{
    setchangeValue(inputValue);
    setValue("");
   }
  return (
    <div className="w-full min-h-screen bg-slate-400 flex items-center justify-center flex-col gap-4 ">
      <div className="w-[45%] h-[40vh] bg-slate-900 flex justify-center gap-8 place-items-center border-4 border-white rounded-lg">
       <button className="text-6xl text-white font-serif font-bold" onClick={add}>Plus</button>
       <span className="text-7xl text-white font-sans font-bold " >{count}</span>
       <button className="text-6xl text-white font-serif font-bold" onClick={minus}>Minus</button>
      </div>   
      <div className="w-[45%] h-[40vh] bg-slate-900  border-4 border-white rounded-lg">
        <div className="flex gap-4">
     <input type="text" placeholder="enter content " className="mt-4 ml-8 pr-24 pl-2 rounded-lg py-2 placeholder:text-black" value={inputValue} onChange={addtext} />
     <button className="text-black bg-white mt-4 py-1 px-4 rounded-lg font-semibold" onClick={addContent}>Add</button>
        </div>
        <h2 className="text-white ml-8 mt-8 text-2xl">Hello {changeValue}</h2>

      </div>     
</div>  

 
 
  )
}

export default App
