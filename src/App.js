import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


/* Components */
// import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

import "./App.css";

function App () {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/property/:id" element={<Logement/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
