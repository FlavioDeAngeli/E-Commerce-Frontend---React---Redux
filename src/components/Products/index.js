import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import Item from "../Item/index";
import { AddProduct } from "../../dispatch/cartDispatch";
import { useDispatch } from "react-redux";

function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="mt-3 ms-3">Dummy JSON API call</h1>
      <ListGroup className="mt-4">
        {products.map((product) => {
          return (
            <div className="itemBox d-inline-flex me-5 mb-2">
              <Item key={product.id} product={product}></Item>
              <Button onClick={(e) => AddProduct(e, product, dispatch)}>
                +
              </Button>
            </div>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Products;
