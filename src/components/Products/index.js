import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import Item from "../Item/index";
import { AddProduct } from "../../dispatch/cartDispatch";
import { useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import "./style.css";

function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <ListGroup className="Products">
      {products.map((product) => {
        return (
          <div key={product.id} className="itemBox d-inline-flex me-3 mb-2">
            <Item product={product}></Item>
            <Button
              className="add-button"
              onClick={(e) => AddProduct(e, product, dispatch)}
            >
              <BsCartPlus />
            </Button>
          </div>
        );
      })}
    </ListGroup>
  );
}

export default Products;
