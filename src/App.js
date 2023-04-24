import { useEffect } from "react";
import { useDispatch } from "react-redux";

import fetchProducts from "./api/dummyjson";

import "./App.css";
// import Products from "./components/Products";
// import Navigation from "./views/layout/Navigation";
// import Footer from "./views/layout/Footer";
import Home from "./views/Home";

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
