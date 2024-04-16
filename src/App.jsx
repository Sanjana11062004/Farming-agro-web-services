import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dish from "./components/Dish";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dish" element={<Dish/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
