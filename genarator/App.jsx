/* eslint-disable no-unused-vars */
import { useState , useCallback ,useEffect, useRef } from "react"


function App() {
 const [color ,setColor] = useState("black");
 const [prevColor, setPrevColor] = useState("cyan");
 const [length , setLength ] = useState(8);
 const [ AddNumberics , setAddNumerics] = useState(false);
 const [ AddCharacters ,  setAddCharacters] = useState(false);
 const [Password , setPassword] = useState("");
 const handleColorChange=( newcolor) =>{
setPrevColor(color);
setColor(newcolor);

 };
 const passwordref= useRef(null);
 const passGenerator = useCallback(() => {
   let pass="";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(AddNumberics) str+= "1234567890";
if(AddCharacters) str+= " !@#$%^&*()-_+={}[]|;'<>,.?/~` ";
 
 for (let i = 1; i <= length; i++) {
  let char= Math.floor(Math.random()* str.length +1 );
   pass += str.charAt(char);
 }
 setPassword(pass)
}, [length , AddNumberics, AddCharacters , setPassword])

useEffect (() => {
  passGenerator()
},[length , AddNumberics, AddCharacters , passGenerator])

const copyPasswordToClipbord = useCallback(() => {
  passwordref.current?.select();
  window.navigator.clipboard.writeText(Password)
},[Password])
  return (

    <div>
      <div className="w-full h-screen shadow-md flex flex-col place-content-center items-center " style={{backgroundColor: color}}>
        <h2 className="text-5xl text-white mb-10">Color Generator</h2>
      <div className=" container bg-slate-700 py-5 px-8 flex gap-6 absolute bottom-10 shadow-lg left-16 rounded-full">
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "red"}} onClick={() => handleColorChange("red") }> red </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "green"}} onClick={() => handleColorChange("green") }>Green </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "blue"}} onClick={() => handleColorChange("blue") }>Blue </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "violet"}} onClick={() => handleColorChange("violet") }>violet </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "teal"}} onClick={() => handleColorChange("teal") }>Teal</button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "lime"}} onClick={() => handleColorChange("lime") }>Lime </button>
       
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "orange"}} onClick={() => handleColorChange("orange") }>Orange </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "pink"}} onClick={() => handleColorChange("pink") }>pink </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "indigo"}} onClick={() => handleColorChange("indigo") }>Indigo </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "cyan"}} onClick={() => handleColorChange("cyan") }>Cyan </button>
      <button className="py-2 px-6 text-white shadow-md font-bold rounded-full" style={{backgroundColor: "grey"}} onClick={() => handleColorChange("grey") }>Grey </button>
      </div>
      <div className="w-[70%] bg-slate-700 h-72 grid grid-cols-4 gap-4 p-4 "> 
      <div style={{backgroundColor: prevColor}}></div>
      <div style={{backgroundColor: prevColor}}></div>
      <div style={{backgroundColor: prevColor}}></div>
      <div style={{backgroundColor: prevColor}}></div>

      </div>
      </div>
      <div className="w-full h-screen shadow-md bg-slate-900  flex flex-col items-center place-content-center">
        <h2 className="text-5xl text-white mb-10">Password Generator</h2>
 <div className="w-[60%] mx-auto shadow-md bg-slate-700 rounded-lg h-52 flex flex-col place-content-center relative">
 <div className="flex gap-2 ">
 <input type="text" placeholder="Password" value={Password} readOnly ref={passwordref}    className="text-white shadow-md bg-neutral-800 py-2 pl-4 rounded-lg w-[70%] ml-14" />
<button className="py-2 px-4 bg-white rounded-lg border font-semibold shadow-md hover:border-slate-50 hover:text-white hover:bg-transparent" onClick={copyPasswordToClipbord}> Copy </button>
 </div>
 <div className="flex gap-4 mt-8 ml-14">
<input type="range" value={length} min={6} max={50} className="text-white cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
<label className="text-white"> Length:{length} </label>
<input 
type="checkbox" 
defaultValue={setAddNumerics}  
onChange={() => {setAddNumerics ((prev) => !prev)}} 
id="inputnum"  />
<label htmlFor="inputnum" className="text-white">Numbers</label>
<input 
type="checkbox" 
defaultValue={setAddCharacters}  
onChange={() => {setAddCharacters ((prev) => !prev)}} 
id="inputchar"  />
<label htmlFor="inputchar" className="text-white">Characters</label>
</div>
 </div>

 </div>
     </div>


  )
}

export default App
