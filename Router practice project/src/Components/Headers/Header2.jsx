import { Link, NavLink } from "react-router-dom"


const Header2 = () => {
  return (
    <div className="shadow sticky z-50 top-0 p-2" >
      <Link className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 flex justify-between items-center ">
    <div className="flex flex-wrap gap-4 "> 
    <img src="vite.svg" alt="" />  
    <h2>logo</h2>
    </div>
      
  <ul className="flex font-semibold  mr-8  ">
<NavLink to="/"
className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-orange-700` }>
Home
</NavLink>
<NavLink to="/about"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-orange-700` }>
About
</NavLink>
<NavLink to="/contact"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-orange-700` }>
Contact
</NavLink>
<NavLink to="/github"
className={({isActive}) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-orange-700` }>
GitHub
</NavLink>

  </ul>
<div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
  </Link>
    </div>
  )
}

export default Header2