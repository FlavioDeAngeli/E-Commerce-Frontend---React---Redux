import {
  AddToCart,
  RemoveFromCart,
  DeleteFromCart,
  ClearCart,
} from "../store/cart/actions";

export function AddProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(AddToCart(product));
}

export function RemoveProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(RemoveFromCart(product));
}

export function DeleteProduct(e, product, dispatch) {
  e.preventDefault();
  dispatch(DeleteFromCart(product));
}

export function ClearProducts(e, dispatch) {
  e.preventDefault();
  dispatch(ClearCart());
}
