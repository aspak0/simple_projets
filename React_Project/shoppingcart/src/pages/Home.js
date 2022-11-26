import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <div>
        <h2 className="heading">Welcome To redux-store</h2>
        <h3>Products</h3>
        <Product />
      </div>
    </>
  );
};

export default Home;
