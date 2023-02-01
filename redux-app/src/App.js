import ImageConatiner from "./components/ImageConatiner";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";


import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  // const id=crypto.randomUUID()
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    </Router>
     </>
  );      
}

export default App;
 