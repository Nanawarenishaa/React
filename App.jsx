// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Button from "./components/Button";
import Cards from "./components/Cards";
import Header from "./components/Header"
import img from "/gaming avtar.png";


function App() {

  
  const [ data,setData] = useState([
      {
        "id": 1,
        "name": "Cyberpunk 2077",
        "description": "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
        "img": "../public/image1.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/cyberpunk2077"
        }
      },
      {
        "id": 2,
        "name": "The Witcher 3: Wild Hunt",
        "description": "The Witcher 3: Wild Hunt is a story-driven, open-world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        "img": "../public/image2.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/witcher3"
        }
      },
      {
        "id": 3,
        "name": "Red Dead Redemption 2",
        "description": "Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game's vast and atmospheric world provides the foundation for a brand new online multiplayer experience.",
        "img": "../public/image3.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/reddeadredemption2"
        }
      },
      {
        "id": 4,
        "name": "Assassin's Creed Valhalla",
        "description": "Assassin's Creed Valhalla is an action role-playing game set in the Viking Age. Become Eivor, a legendary Viking raider on a quest for glory.",
        "img": "../public/image4.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/assassinscreedvalhalla"
        }
      },
      {
        "id": 5,
        "name": "Call of Duty: Warzone",
        "description": "Call of Duty: Warzone is a free-to-play battle royale game. Drop into a massive combat arena, loot, and fight to be the last squad standing.",
        "img": "../public/image5.png",
        "buy_btn": {
          "text": "Play Now",
          "link": "https://example.com/play/codwarzone"
        }
      },
      {
        "id": 6,
        "name": "Fortnite",
        "description": "Fortnite is a popular battle royale game where players can build structures and compete in intense PvP battles.",
        "img": "../public/image6.png",
        "buy_btn": {
          "text": "Play Now",
          "link": "https://example.com/play/fortnite"
        }
      },
      {
        "id": 7,
        "name": "Minecraft",
        "description": "Minecraft is a sandbox game that allows players to build and explore virtual worlds made of blocks.",
        "img": "../public/image7.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/minecraft"
        }
      },
      {
        "id": 8,
        "name": "Apex Legends",
        "description": "Apex Legends is a free-to-play battle royale game set in the Titanfall universe. Choose your legend, team up, and battle for fame and fortune.",
        "img": "../public/image8.png",
        "buy_btn": {
          "text": "Play Now",
          "link": "https://example.com/play/apexlegends"
        }
      },
      {
        "id": 9,
        "name": "League of Legends",
        "description": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
        "img": "../public/image9.png",
        "buy_btn": {
          "text": "Play Now",
          "link": "https://example.com/play/leagueoflegends"
        }
      },
      {
        "id": 10,
        "name": "The Elder Scrolls V: Skyrim",
        "description": "The Elder Scrolls V: Skyrim is an open-world action RPG known for its vast, immersive world and rich storytelling.",
        "img": "../public/image10.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/skyrim"
        }
      }
    ]);
    
    const addCard = () => {
    alert("card is added");
      const newGame = {
        "id": 11,
        "name": "The Elder Scrolls V: Skyrim",
        "description": "The Elder Scrolls V: Skyrim is an open-world action RPG known for its vast, immersive world and rich storytelling.",
        "img": "../public/image5.png",
        "buy_btn": {
          "text": "Buy Now",
          "link": "https://example.com/buy/skyrim"
        }
      };
      setData([...data, newGame]);
    };
    
  
  console.log(data);
  


  return (
    <>
      <div className="w-full min-h-screen bg-slate-200">
  <Header />
  <div className="flex justify-center mt-16 ">
    <div className="container min-h-96 grid grid-cols-1 lg:grid-cols-2 gap-16 bg-slate-900 rounded-lg p-8 w-[80%] shadow-lg  ">
      <div className="p-4">
        <h2 className="text-white font-bold text-2xl mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, odio?</h2>
      <p className=" text-xl text-slate-200 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab tempore aspernatur animi doloribus? Dignissimos magnam voluptatem nulla quos laborum.</p>
      <Button text="read more" mt="mt-12 " />
      </div>
    <img src={img} className="w-96 rounded-lg " />
    </div>
      </div>
      </div>
   <section className="w-full min-h-screen bg-slate-200 flex flex-col items-center justify-center">
   <button type="button" onClick={addCard} className='bg-black text-white py-2 px-4 rounded-lg font-bold mt-4'>Add Game Card</button>

<div className=" mx-auto  mt-8 place-items-center grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-slate-800 p-8">
  {data.map((gameData) => (

      <Cards key={gameData.id} gameData={gameData}  />
    )
  )}
  

</div>
   </section>
      
    </>
        
  )
}

export default App
