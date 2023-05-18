import React from "react";

import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/productList/ProductList";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <ProductList />
    </div>
  );
};

export default Home;
