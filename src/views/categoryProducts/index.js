import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Navigation from "../layout/navigation";
import NavigationMobile from "../layout/navigationMobile";
import Searchbar from "../../components/Searchbar";
import Footer from "../layout/footer";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import fetchProducts from "../../api/products/getProducts";
import Products from "../../components/Products";
import CategoriesList from "../categoriesList";

function CategoryProducts() {
  const currentCategory = useParams();
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.ui.isMobile);
  const request = "products/category/";
  const options = `${currentCategory.category}`;

  useEffect(() => {
    fetchProducts(dispatch, request, options);
    window.location.href = "#top";
  }, [dispatch, request, options]);

  return (
    <div className="CategoryProducts">
      {!isMobile ? <Navigation /> : <NavigationMobile />}
      <Searchbar />
      <Container fluid className="mainContent d-flex">
        <CategoriesList />
        <Products />
      </Container>
      <Footer />
    </div>
  );
}

export default CategoryProducts;
