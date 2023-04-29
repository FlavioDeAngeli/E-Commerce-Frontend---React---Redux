import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchProducts from "./api/products/getProducts";
import "./App.css";
import Home from "./views/home";

//TODO - Fare la fetch possibilmente dopo il login (nella home?/in products?)

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
