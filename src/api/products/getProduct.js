import { API_BASE_URL } from "../../config";

async function fetchProduct(request, options) {
  try {
    const data = await fetch(`${API_BASE_URL}${request}${options}`);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default fetchProduct;
