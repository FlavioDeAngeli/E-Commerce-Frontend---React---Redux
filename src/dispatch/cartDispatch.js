import { AddToCart, RemoveFromCart } from "../store/cart/actions";

export function AddProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(AddToCart(product));
}

export function RemoveProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(RemoveFromCart(product));
}
