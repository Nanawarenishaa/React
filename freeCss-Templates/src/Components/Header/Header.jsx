import { Link, NavLink } from "react-router-dom"


const Header = () => {

  return (
    <div className="shadow sticky z-50 top-0 p-2 flex justify-around bg-slate-950 " >
   <div className=" border-gray-200 px-4 lg:px-6 py-2.5 flex items-center ">
 

  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
<NavLink to="/"
className={({ isActive }) => `block py-2  pr-4  pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
Home
</NavLink>
<NavLink to="/about"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
About
</NavLink>
<NavLink to="/submitTemplate"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700 hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg  ` }>
Submit a Template
</NavLink>
<NavLink to="/contact"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-slate-200"}  hover:bg-gray-700  hover:text-white  lg:p-2  lg:px-4 hover:rounded-lg`  }>
Contact
</NavLink>


  </ul>
      </div>
<div className="flex items-center gap-4 lg:order-4">
                        <Link
                            to="#"
                            className="text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-indigo-500  hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                       Advertise
                        </Link>


 </div>
</div>


  )
}

export default Header
