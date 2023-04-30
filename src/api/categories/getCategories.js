import { API_BASE_URL } from "../../config";
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
} from "../../store/categories/actions";

async function fetchCategories(dispatch) {
  dispatch(fetchCategoriesRequest);
  try {
    const data = await fetch(`${API_BASE_URL}products/categories`);
    const json = await data.json();
    dispatch(fetchCategoriesSuccess(json));
  } catch (error) {
    console.log(error);
  }
}

export default fetchCategories;
