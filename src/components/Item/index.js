import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setProduct } from "../../dispatch/modalDispatch";
import "./style.css";

function Item({ product, setModalShow }) {
  const dispatch = useDispatch();

  function handleClick(e, dispatch, product) {
    e.preventDefault();
    setProduct(e, product, dispatch);
    setModalShow(true);
  }

  return (
    <>
      <ListGroup.Item
        action
        onClick={(e) => {
          handleClick(e, dispatch, product);
        }}
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
    </>
  );
}

export default Item;
