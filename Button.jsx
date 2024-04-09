
// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({text , mr}) => {
  return (
    <button className= {` ${mr}  text-xl bg-blue-500 text-slate-100 px-4 py-2 rounded-lg  `}>
      {text}
    </button>
  )
}

export default Button
