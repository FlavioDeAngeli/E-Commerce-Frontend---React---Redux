import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProducts from "./api/products/getProducts";
import fetchCategories from "./api/categories/getCategories";
import Home from "./views/home";
import "./App.css";
import { API_FETCH_LIMIT } from "./config";

function App() {
  const dispatch = useDispatch();

  const [skip, setSkip] = useState(0);
  const request = "products";
  const options = `?limit=${API_FETCH_LIMIT}&skip=${skip}`;

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
