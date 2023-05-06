import { React } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListGroup, Button, Badge, Container } from "react-bootstrap";
import Item from "../Item/index";
import { BsCart2 } from "react-icons/bs";
import {
  AddProduct,
  RemoveProduct,
  DeleteProduct,
  ClearProducts,
} from "../../dispatch/cartDispatch";

function Cart() {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let cartQuantity = 0;
  products?.forEach((product) => {
    cartQuantity = cartQuantity + product.quantity;
  });

  let total = 0;
  products.forEach((product) => {
    total = total + product.price * product.quantity;
  });

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3 className="mt-3 ms-3 ps-2">
          Esegui il checkout oppure acquista altri prodotti:
        </h3>
        <div>
          <BsCart2 className="cart-icon" /> {cartQuantity > 0 && cartQuantity}
        </div>
      </div>

      <ListGroup className="m-4 ps-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="itemBox d-inline-flex me-5 mb-2">
              <Item product={product}></Item>
              <Button onClick={(e) => AddProduct(e, product, dispatch)}>
                +
              </Button>
              <Button onClick={(e) => RemoveProduct(e, product, dispatch)}>
                -
              </Button>
              <Badge bg="success" className="d-flex align-items-center">
                {product.quantity}
              </Badge>
              <Button
                variant="danger"
                onClick={(e) => DeleteProduct(e, product, dispatch)}
              >
                X
              </Button>
            </div>
          );
        })}
      </ListGroup>
      {products.length > 0 ? (
        <Container className="d-flex flex-row-reverse p-0 me-5 mt-4">
          <Button
            className="justify-self-end"
            variant="danger"
            onClick={(e) => ClearProducts(e, dispatch)}
          >
            Clear Cart
          </Button>
          <Button>Total: {total}$ </Button>
        </Container>
      ) : null}
    </>
  );
}

export default Cart;
