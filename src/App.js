import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:id" element={<Cards />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
