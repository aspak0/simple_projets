import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./index.css";
import { Provider } from "react-redux";
import store from './store/store'

const App = () => {
  return (
    <>
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    </>
  );
};

export default App;

/*
prop drilling  will be posible  to do this task;
context api  will be posible  to do this task;
all components are diffrent diffrent folders  inside so
  we are  using to connect componets in using redux (redux toolkit)*/
