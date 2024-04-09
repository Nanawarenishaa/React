import Button from "./Button"

const Header = () => {
  return (
    <nav className="w-full py-2 border-2 flex items-center justify-around bg-slate-100">
      <div className="flex gap-4 items-center ">
        <img className="w-10 h-10 " src="/contact-cactus.png" alt="logo" />
        <h2> Nisha </h2>
      </div>
      <div className=" hidden sm:flex gap-8 items-center text-slate-900 font-bold">
        <a href="/"> Home </a>
        <a href="/"> About </a>
        <a href="/"> Testimonials </a>
        <a href="/"> Contact </a>
        <Button mr = "ml-20 " text = "Login" /> 
      </div>
    
    </nav>
  )
}

export default Header
