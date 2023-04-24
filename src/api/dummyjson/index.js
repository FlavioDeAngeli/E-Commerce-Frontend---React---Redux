import {
  fetchDataRequest,
  fetchDataSuccess,
} from "../../store/dummyjson/actions";

async function fetchProducts(dispatch) {
  dispatch(fetchDataRequest);
  try {
    const data = await fetch("https://dummyjson.com/products?limit=10");
    const json = await data.json();
    dispatch(fetchDataSuccess(json.products));
  } catch (error) {
    console.log(error);
  }
}

export default fetchProducts;
