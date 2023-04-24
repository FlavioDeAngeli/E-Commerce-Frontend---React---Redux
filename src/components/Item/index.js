import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/cart/actions";

function Item({ product }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  const addProduct = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="itemBox d-inline-flex me-5 mb-2">
      <ListGroup.Item action onClick={handleClick} className="">
        {product.title} - {product.description} - {product.price}$
      </ListGroup.Item>
      <Button onClick={addProduct}>+</Button>
    </div>
  );
}

export default Item;
