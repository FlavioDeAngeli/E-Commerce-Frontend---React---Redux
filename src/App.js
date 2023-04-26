import { useEffect } from "react";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import fetchProducts from "./api/products/getProducts";

import "./App.css";
import Home from "./views/home";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log("app :", user);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  if (user.token) {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }

  return <Navigate replace to="/login" />;
}

export default App;
