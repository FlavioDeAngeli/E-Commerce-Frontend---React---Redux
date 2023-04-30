import { API_BASE_URL } from "../../config";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
} from "../../store/products/actions";

async function fetchProducts(dispatch, request, options) {
  dispatch(fetchProductsRequest);
  try {
    const data = await fetch(`${API_BASE_URL}${request}${options}`);
    const json = await data.json();
    dispatch(fetchProductsSuccess(json.products));
  } catch (error) {
    console.log(error);
  }
}

export default fetchProducts;
