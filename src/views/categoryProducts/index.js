import { React, useEffect } from "react";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import fetchProducts from "../../api/products/getProducts";
import Products from "../../components/Products";

function CategoryProducts() {
  const currentCategory = useParams();
  const dispatch = useDispatch();
  const request = "products/category/";
  const options = `${currentCategory.category}`;

  useEffect(() => {
    fetchProducts(dispatch, request, options);
  }, [dispatch, request, options]);

  return (
    <div className="CategoryProducts">
      <Navigation />
      <h2 className="mt-3 ms-3">
        {currentCategory.category.charAt(0).toUpperCase() +
          currentCategory.category.slice(1)}
        :
      </h2>
      <Products />
      <Footer />
    </div>
  );
}

export default CategoryProducts;
