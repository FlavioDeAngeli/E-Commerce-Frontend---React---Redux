import { setModalProduct } from "../store/modal/actions";

export function setProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(setModalProduct(product));
}
