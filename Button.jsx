

// eslint-disable-next-line react/prop-types
function Button({ text , mt }){
  return (
    <button className= { `${mt} bg-white text-black ml-24 py-2 px-8 rounded-lg text-xl font-semibold `}>
    {text}
  </button>
  )
}

export default Button