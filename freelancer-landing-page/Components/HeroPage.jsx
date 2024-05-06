import Button from "./Button"


const HeroPage = () => {
  return (
    <div className="w-full m-h-[100vh] flex flex-col items-center ">
     <div className="container mx-auto w-[70%]  grid grid-cols-1 gap-6 md:grid-cols-2  mt-40">
      <div className="">
     <img src="experience-img.jpg" alt="" className=" w-full" />
      </div>
      <div className="flex flex-col gap-8 mt-16">
       <h2 className="text-2xl font-bold font-sans" >BEST EXPERIENCED FREELANCER HERE </h2>
        <p className="text-slate-800">It is a long established fact that a reader will be distracted by the readable content of a page when a looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
        </p>
        <div className="flex gap-2">
        <Button text={"Read More"} />
      <Button bg="bg-slate-900 hover:text-slate-900 hover:border-slate-900" text= {"Hire"} />
        </div>
      </div>
       </div>

       <div  className="container mx-auto w-[70%]  grid grid-rows-1 mb-24">
       <div className="">
     <img src="about-img.jpg" alt="" className=" w-full  " />
      </div>
      <div className="flex flex-col gap-6 text-center">
       <h2 className="text-3xl font-bold font-sans" >ABOUT SPRING COMPANY </h2>
        <p className="text-slate-800">There are many varaiations of passeges of Lorem Ipsum available, but the majority have suffered alteration in some form , by injected humors or randomized words which don't look even slightly believable. If you there are There are many varaiations of passeges of Lorem Ipsum available, but the majority have suffered alteration in some form , by injected humors or randomized words which don't look even slightly believable.
        </p>
        <Button text={"Read More"} mx="mx-auto" />
      </div>
       </div>
    </div>
  )
}

export default HeroPage