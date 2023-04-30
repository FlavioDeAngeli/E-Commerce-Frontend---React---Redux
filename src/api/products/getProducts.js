import { API_BASE_URL } from "../../config";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../../store/products/actions";

async function fetchProducts(dispatch) {
  dispatch(fetchProductsRequest);
  try {
    const data = await fetch(`${API_BASE_URL}products?limit=10`);
    const json = await data.json();
    dispatch(fetchProductsSuccess(json.products));
  } catch (error) {
    console.log(error);
  }
}

export default fetchProducts;
