import React from "react";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Products from "../components/Products";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
