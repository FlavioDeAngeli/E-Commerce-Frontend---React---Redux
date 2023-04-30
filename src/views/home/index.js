import React from "react";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Products from "../../components/Products";
function Home() {
  return (
    <div className="Home">
      <Navigation />
      <h2 className="mt-3 ms-3">Tutti i prodotti:</h2>
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
