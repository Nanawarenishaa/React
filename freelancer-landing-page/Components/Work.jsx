

const Work = () => {
  return (
    <div className="w-full h-[100vh] place-content-center ">
    <h2 className="text-3xl font-bold ml-24">WORK FREELANCER HAS DONE</h2>
    <div className="container mx-auto h-[60vh] grid grid-cols-2  p-2">
    <div className="container mx-auto h-[60vh] grid grid-rows-4 gap-6 p-8">
     <div className="flex gap-8 ">
        <div className="bg-teal-500 w-fit p-4 rounded-full">
        <img src="f1.png" alt="" className="w-12" />
      </div>
      <div className="place-content-center">
      <span className="font-bold text-red-500">$250 Million </span>
      <h3 className="text-2xl font-bold">Paid to Freelancers</h3>
 </div>
     </div>
     <div className="flex gap-8 ">
        <div className="bg-slate-900  w-fit p-4 rounded-full hover:bg-teal-500">
        <img src="f2.png" alt="" className="w-12" />
      </div>
      <div className="place-content-center">
      <span className="font-bold text-red-500">$2 Million </span>
      <h3 className="text-2xl font-bold">Paid Invoices</h3>
 </div>
     </div>
     <div className="flex gap-8 ">
        <div className="bg-slate-900 w-fit p-4 rounded-full hover:bg-teal-500">
        <img src="f3.png" alt="" className="w-12" />
      </div>
      <div className="place-content-center">
      <span className="font-bold text-red-500">700,000 </span>
      <h3 className="text-2xl font-bold">World Wide Freelancer</h3>
 </div>
     </div>
     <div className="flex gap-8 ">
        <div className="bg-slate-900  w-fit p-5 rounded-full hover:bg-teal-500">
        <img src="f4.png" alt="" className="w-10" />
      </div>
      <div className="place-content-center">
      <span className="font-bold text-red-500">98% </span>
      <h3 className="text-2xl font-bold">Customer Satisfaction Rate</h3>
 </div>
     </div>
     </div>
     <div className="">
        <img src="freelance-img.jpg" alt="" />
     </div>
    </div>
    </div>
  )
}

export default Work