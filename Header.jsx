import Button from "./Button"




const Header = () => {
  return (
    <nav className="w-full h-[5rem] bg-slate-800 flex items-center justify-around">
    <div className="flex items-center gap-6 ">
      <img src="../public/gaming avtar.png" className="h-14 rounded-lg" />
      <h2 className="text-white font-bold text-2xl "> Nova </h2>
    </div>
    <div className="flex">
      <div className= "hidden sm:flex gap-8 font-semibold items-center text-white">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Testimonial</a>
        <a href="/">Content</a>  
      </div>
<Button text={ "login "}  />

    </div>
    </nav>
    
  )
}

export default Header
