import React from "react";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Products from "../../components/Products";
import Skip from "../../components/Skip";
import Searchbar from "../../components/Searchbar";
import CategoriesList from "../categoriesList";
import { Container } from "react-bootstrap";
function Home({ skip, setSkip }) {
  return (
    <div className="Home">
      <Navigation />
      <h2 className="mt-3 ms-3">Tutti i prodotti:</h2>
      <Searchbar />
      <Container fluid className="mainContent">
        <CategoriesList />
        <Products />
      </Container>
      <Skip skip={skip} setSkip={setSkip} />
      <Footer />
    </div>
  );
}

export default Home;
