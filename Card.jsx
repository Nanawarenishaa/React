/* eslint-disable react/prop-types */

const Card = ({user}) => {
  return (
    <div key={user.id} className= {`p-4 w-64 rounded-lg justify-center items-center h-72 flex flex-col  shadow-lg  ${user.isPass ? "bg-blue-600" : "bg-green-500 "}  bg-white `}>
    <img className="w-48 h-48" src={user.img} alt="" />
    <div className="px-4 text-center ">
      <h2 className="font-bold text-2xl "> {user.name} </h2>
      <p className="font-semobold text-xl"> {user.age} </p>
    </div>
  </div>
  )
}

export default Card
