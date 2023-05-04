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
    <ListGroup className="col-6">
      {products.map((product) => {
        return (
          <div key={product.id} className="itemBox d-inline-flex me-5 mb-2">
            <Item product={product}></Item>
            <Button onClick={(e) => AddProduct(e, product, dispatch)}>+</Button>
          </div>
        );
      })}
    </ListGroup>
  );
}

export default Products;
