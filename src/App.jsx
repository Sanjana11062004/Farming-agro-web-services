import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dish from "./components/Dish";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<RegistrationForm/>} />
        <Route exact path="login" element={<LoginForm/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/dish" element={<Dish/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
