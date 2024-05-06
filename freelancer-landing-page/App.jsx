import Catagory from "./Components/Catagory";
import HeroPage from "./Components/HeroPage";
import Index from "./Components/Index";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";

const App = () => {
  return <div className="m-h-screen ">
<NavBar />
<HeroPage />
<Catagory />
<Index />
<Work />
  </div>;
};

export default App;
