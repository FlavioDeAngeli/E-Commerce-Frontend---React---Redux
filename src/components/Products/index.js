import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import ProductModal from "../ProductModal";
import Item from "../Item/index";
import { AddProduct } from "../../dispatch/cartDispatch";
import { useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import "./style.css";

function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    window.location.href = "#top";
  });

  const [modalShow, setModalShow] = useState(false);

  return (
    <ListGroup className="Products">
      {products.map((product) => {
        return (
          <div key={product.id} className="itemBox d-inline-flex me-3 mb-2">
            <Item product={product} setModalShow={setModalShow}></Item>
            <Button
              className="add-button"
              onClick={(e) => AddProduct(e, product, dispatch)}
            >
              <BsCartPlus />
            </Button>
          </div>
        );
      })}
      <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
    </ListGroup>
  );
}

export default Products;
