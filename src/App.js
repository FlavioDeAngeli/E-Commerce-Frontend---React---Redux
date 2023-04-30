import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProducts from "./api/products/getProducts";
import fetchCategories from "./api/categories/getCategories";
import "./App.css";
import Home from "./views/home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
    fetchCategories(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
