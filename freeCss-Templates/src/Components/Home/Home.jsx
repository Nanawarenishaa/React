import { Link, NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-slate-100 " >
    <div className="bg-slate-300 w-full h-72 pt-10">
        <h2 className="text-slate-800 text-6xl  font-serif ml-48  ">Free CSS</h2>
        <p className="text-slate-700 font-serif ml-48">Free CSS Templates , Layouts & Morel </p>
    </div>

    <div className="container bg-slate-100  w-[70%] h-[80vh] absolute top-56 left-48 rounded-lg ">
    <div className="shadow sticky z-50 top-0 flex justify-around bg-slate-950 rounded-t-lg " >
   <div className=" border-gray-200 px-4 lg:px-6 py-2.5 flex items-center ">
 

  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
<NavLink to="/"
className={({ isActive }) => `block py-2 font-serif  pr-4  pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
Free CSS Templates
</NavLink>
<NavLink to="/about"
className={({isActive}) => `block py-2 font-serif pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
Premium CSS Templates
</NavLink>
<NavLink to="/submitTemplate"
className={({isActive}) => `block py-2 font-serif pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
Free CSS Layout
</NavLink>
<NavLink to="/contact"
className={({isActive}) => `block py-2 font-serif pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700  hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg`  }>
Free CSS Menus
</NavLink>


  </ul>
      </div>

</div>


    </div>
    </div>
  )
}

export default Home
