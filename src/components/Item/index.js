import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./style.css";

function Item({ product }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <ListGroup.Item
      action
      onClick={handleClick}
      className="Item row d-flex me-3 p-0"
    >
      <div className="col-11">
        <div className="title p-2">{product.title}</div>
        <div className="description ps-2 pb-2 ">{product.description}</div>
      </div>
      <div className="price d-flex justify-content-center align-items-center col-1">
        {product.price} $
      </div>
    </ListGroup.Item>
  );
}

export default Item;
