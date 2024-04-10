/* eslint-disable react/prop-types */
import Button from "./Button"


function Cards({gameData}) {
  return (

     <div key={gameData.id} className= {`bg-neutral-600 text-white p-4 w-64 rounded-lg justify-center items-center h-72 flex flex-col  shadow-lg `}>
    <img className="w-48 h-48" src={gameData.img} alt="" />
    <div className="px-4 text-center ">
      <h2 className="font-bold text-2xl text-white"> {gameData.name} </h2>
      <Button text="Buy"  />
    </div>
  </div>
   
  )
}

export default Cards