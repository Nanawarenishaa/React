

const Catagory = () => {
  return (
   <div className="w-full h-[100vh] flex flex-col items-center mt-10 justify-center  ">
    <div className=" m-h-[80vh] w-full  bg-teal-500">
        <h2 className="text-white text-3xl font-bold text-center underline decoration-2 mt-10 tracking-widest">CATAGORY</h2>
        <div className="container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-16 mt-10 w-[70%]  mx-auto place-content-center mb-10">
         <div className= "w-fit p-2 flex flex-col gap-4 ">
            <img src="c1.png" alt="" className="px-2" />
            <span className="text-white text-xl  ">Design & Art </span>
         </div>
        <div className= "w-fit p-2 flex flex-col gap-2">
            <img src="c2.png" alt="" className="px-8 pt-2" />
            <span className="text-white text-xl ">Web Development </span>
         </div>
        <div className= "w-fit p-2 flex flex-col gap-2">
            <img src="c3.png" alt="" className="pt-6" />
            <span className="text-white text-xl ">SEO Marketing </span>
         </div>
        <div className= "w-fit p-2 flex flex-col gap-2">
            <img src="c4.png" alt=""  className="px-2 pt-2" />
            <span className="text-white text-xl ">Video Editing </span>
         </div>
        <div className= "w-fit p-2 flex flex-col gap-2">
            <img src="c5.png" alt=""  className="px-4 pt-2" />
            <span className="text-white text-xl ">Logo Design </span>
         </div>
        <div className= "w-fit p-2 flex flex-col gap-2">
            <img src="c6.png" alt=""  className=" pt-2" />
            <span className="text-white text-xl ">Game Design</span>
         </div>
        </div>
    </div>
   </div>
  )
}

export default Catagory