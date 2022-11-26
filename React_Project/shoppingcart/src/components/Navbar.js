import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cartSlice";


const Navbar = () => {


  //here we are subscribing the data;
  const items = useSelector(selectCart);


  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">Redux Store</span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>

          <span className="cartcount"> Items: {items.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
