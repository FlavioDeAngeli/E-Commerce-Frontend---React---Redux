import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";

function Item({ product }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <ListGroup.Item action onClick={handleClick} className="">
      {product.title} - {product.description} - {product.price}$
    </ListGroup.Item>
  );
}

export default Item;
