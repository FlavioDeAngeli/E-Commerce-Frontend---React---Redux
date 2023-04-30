import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProducts from "./api/products/getProducts";
import fetchCategories from "./api/categories/getCategories";
import "./App.css";
import Home from "./views/home";

function App() {
  const dispatch = useDispatch();

  const [skip, setSkip] = useState("");
  const request = "products";
  const options = `?limit=10&skip=${skip}`;

  useEffect(() => {
    fetchProducts(dispatch, request, options);
    fetchCategories(dispatch);
  }, [dispatch, options]);

  return (
    <div className="App">
      <Home skip={skip} setSkip={setSkip} />
    </div>
  );
}

export default App;
