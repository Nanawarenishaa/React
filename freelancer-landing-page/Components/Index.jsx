import Button from "./Button"

const Index = () => {

   
  return (
    <div className="w-full m-h-[100vh] flex flex-col items-center ">
    <div className=" w-[100%] h-[100vh] grid grid-cols-1 md:grid-cols-2 relative">
     <div className="bg-slate-900">
     <div className=" mt-48 p-10 flex flex-col gap-8 bg-slate-450">
  <h2 className="text-white text-4xl font-bold">YOU CAN HIRE FREELANCER HERE</h2>
  <p className="text-white">Its a long established fact that a reader will be distracted by the readable content of a page. </p>
  <div className="flex gap-2"> 
  <Button text={"About Us"} />
      <Button bg="text-slate-900 bg-white  hover:text-white hover:border-white" text= {"Get a Quick"} />
  </div>

  </div>
     </div>


     <div className="bg-teal-500">
        <div className="mt-32 p-10  ">
            <img src="slider-img.png" alt="" />
        </div>
     </div>
      </div>
</div>
  )
}

export default Index