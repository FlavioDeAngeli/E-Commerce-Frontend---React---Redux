import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button, Badge } from "react-bootstrap";
import Item from "../Item/index";
import { AddProduct, RemoveProduct } from "../../dispatch/cartDispatch";
import { useDispatch } from "react-redux";

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
              <Badge bg="secondary" className="d-flex align-items-center">
                {product.quantity}
              </Badge>
            </div>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Cart;
