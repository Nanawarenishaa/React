
import React, { useState ,useContext  } from 'react'
import UserContext from '../context/UserContext'

function Login () {
const [PersonName , setPersonName] =  useState("")
const [PersonAddress , setPersonAddress] =  useState("")
const {setPersonData} = useContext(UserContext)
const btnHandler = (e) => {
  e.preventDefault()
  setPersonData({PersonName, PersonAddress})
}
return(


<div className="w-[60%] bg-slate-500 flex flex-col gap-4 p-4 place-content-center mx-auto rounded-sm mt-32">
<input type="text" value={PersonName} placeholder='Enter your Name' className='rounded-sm py-2 px-4 ' onChange={(e) => setPersonName (e.target.value)} />
<textarea value={PersonAddress} placeholder='Enter your Address' className='rounded-sm py-2 px-4' onChange={(e) => setPersonAddress (e.target.value)}   ></textarea>
<button onClick={btnHandler} className='w-fit mx-auto py-2 px-8 bg-sky-200 rounded-sm border-2 border-slate-500 hover:border-sky-200 hover:bg-transparent hover:text-sky-200'> Submit Data </button>
</div>



)




}
 export default Login 