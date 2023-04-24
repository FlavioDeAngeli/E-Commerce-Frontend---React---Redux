import React from "react";
import { useSelector } from "react-redux";

import { ListGroup } from "react-bootstrap";
import Item from "../Item/index";

function Products() {
  const products = useSelector((state) => state.product.products);

  return (
    <>
      <h1 className="mt-3 ms-3">Dummy JSON API call</h1>
      <ListGroup className="mt-4">
        {products.map((product) => {
          return <Item key={product.id} product={product}></Item>;
        })}
      </ListGroup>
    </>
  );
}

export default Products;
