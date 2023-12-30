import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Navbar from "./components/specific_components/Navbar";
import ConstructionPopup from './components/specific_components/ConstructionPopup';


function App() {

  return (
    <Router>
      <ConstructionPopup />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;