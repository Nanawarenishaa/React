import { CgMenuRightAlt } from "react-icons/cg";

const NavBar = () => {
  return (
<div className="w-full p-4 bg-slate-900 flex justify-between fixed z-10">
    <div className="flex gap-2">
<img src="logo.png" alt="" className="h-10" />
<h2 className="text-2xl font-bold text-white">Spering</h2>
    </div>
    <div className="">
     <a href="/">Home</a>
    </div>
<div className="text-white font-bold text-4xl"><CgMenuRightAlt /></div>
</div>
  )
}

export default NavBar