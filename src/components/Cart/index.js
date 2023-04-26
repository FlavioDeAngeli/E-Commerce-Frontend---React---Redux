import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button, Badge } from "react-bootstrap";
import Item from "../Item/index";
import {
  AddProduct,
  RemoveProduct,
  DeleteProduct,
  ClearProducts,
} from "../../dispatch/cartDispatch";
import { useDispatch } from "react-redux";
import {} from "../../dispatch/cartDispatch";

//TODO - render commponent on poduct.quantity update

function Cart() {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [products]);

  return (
    <>
      <h1 className="mt-3 ms-3">My Cart:</h1>
      <ListGroup className="mt-4">
        {products.map((product) => {
          return (
            <div className="itemBox d-inline-flex me-5 mb-2">
              <Item key={product.id} product={product}></Item>
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
        <Button variant="danger" onClick={(e) => ClearProducts(e, dispatch)}>
          Clear Cart
        </Button>
      ) : null}
    </>
  );
}

export default Cart;
