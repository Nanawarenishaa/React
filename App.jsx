import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import img from "/contact-cactus.png";
const App = () => {
  const data = [
    {
      id: 0,
      name: "Nisha",
      age: 19,
      isPass: true,
      img: "/contact-cactus.png",
    },
    {
      id: 1,
      name: "Rajashri",
      age: 20,
      isPass: true,
      img: "/contact-cactus.png",
    },
    {
      id: 3,
      name: "Amol",
      age: 21,
      isPass: false,
      img: "/contact-cactus.png",
    },
    {
      id: 4,
      name: "Sachin",
      age: 21,
      isPass: false,
      img: "/contact-cactus.png",
    },
  ];
  return (
    <div>
      <Header />
      <div className="container  mb-8 min-h-[30rem] mx-auto  mt-8 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex shadow-lg  bg-slate-300  justify-center gap-8 flex-col px-8 py-8 ">
          <h1 className="font-bold text-3xl uppercase">
            {" "}
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-gray-800 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            praesentium evenieime?
          </p>
          <Button mr=" w-fit" text={"Read More "} />
        </div>
        <div className="flex items-center justify-center bg-slate-300">
          <img className="h-[25rem] " src={img} alt="" />
        </div>
      </div>

      <section className="w-full min-h-48 bg-slate-300 py-8">
        <div className="container mx-auto  mt-8 place-items-center grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data.map((user) => {
            return (
             <Card key={user.id} user={user} /> 
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
