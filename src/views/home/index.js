import React from "react";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Products from "../../components/Products";

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
