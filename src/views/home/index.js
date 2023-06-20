import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import Products from "../../components/Products";
import Skip from "../../components/Skip";
import Searchbar from "../../components/Searchbar";
import CategoriesList from "../categoriesList";
import { Container } from "react-bootstrap";

function Home({ skip, setSkip }) {
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <div className="Home">
      <Navigation />
      <Searchbar />
      <Container fluid className="mainContent d-flex">
        <CategoriesList />
        <Products />
      </Container>
      <Skip skip={skip} setSkip={setSkip} />
      <Footer />
    </div>
  );
}

export default Home;
