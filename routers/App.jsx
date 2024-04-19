
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div> 
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">Logo</Link>
            
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>

        <Router>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

    </Router>
      </div>
  );
}

export default App;
