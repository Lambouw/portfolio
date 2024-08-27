import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Logos / Images

// Import Pages
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import Data from "./pages/Data";

// Import Styles
import "./styles/css/reset.css";
import "./styles/css/app.css";
import "./styles/css/link.css";
import "./styles/css/spaceconstants.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
