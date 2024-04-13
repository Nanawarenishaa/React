import Cards from "./components/Cards"



function App() {

    const products= [
      {
        "id":1,
        "title": "In Stock",
        "img": "../public/laptop.jpg",
        "subtitle": "HP",
        "name": "HP Laptop",
        "price": "$500",
        "edit_price": "$799",
       "button1": "Add to Cart" ,
         "button3":"View"   
          },
    
      {
        "id":2,
        "title": "In Stock",
        "img": "../public/mi.jpg",
        "subtitle": "MI",
        "name": "Red MI Note 8",
        "price": "$200",
        "edit_price": "$300",
       "button1": "Add to Cart" ,
         "button3":"View"     
      },
      {
        "id":3,
        "title": "In Stock",
        "img": "../public/menshirt.jpg",
        "subtitle": "Levis",
        "name": "Mens Shirt",
        "price": "$299",
        "edit_price": "$359",
       "button1": "Add to Cart" ,
         "button3":"View"  
           
      },
      {
        "id":4,
        "title": "In Stock",
        "img": "../public/headphone.jpg",
        "subtitle": "Asus",
        "name": "Heade Phone",
        "price": "$399",
        "edit_price": "$499",
       "button1": "Add to Cart" ,
         "button3":"View" 
         
        }
    ];
  
  return (
    <>
      <div className="w-full min-h-screen bg-slate-100 p-2">
        <h2 className="text-5xl font-semibold ml-16 mt-16">Our Product</h2>
       <div className="container mx-auto w-[90%] h-[60vh] mt-24 flex gap-8">
        {products.map((productData) => (

       <Cards key={productData.id} productData={productData}/>
        ))}

       </div>


      </div>
     
    </>
  )
}

export default App
