import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListGroup, Button, Badge, Container } from "react-bootstrap";
import Item from "../Item/index";
import ProductModal from "../ProductModal";
import { BsCartPlus, BsCartDash, BsTrash3 } from "react-icons/bs";
import {
  AddProduct,
  RemoveProduct,
  DeleteProduct,
  ClearProducts,
} from "../../dispatch/cartDispatch";
import "./style.css";

function Cart() {
  const products = useSelector((state) => state.cart.cart);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  let cartQuantity = 0;
  products?.forEach((product) => {
    cartQuantity = cartQuantity + product.quantity;
  });

  let total = 0;
  products.forEach((product) => {
    total = total + product.price * product.quantity;
  });

  return (
    <>
      <div className="d-flex  align-items-center">
        <h3 className="mt-3 ms-3 ps-2">
          Esegui il checkout oppure acquista altri prodotti:
        </h3>
      </div>

      <ListGroup className="col-12 m-4 ps-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="itemBox d-inline-flex me-5 mb-2">
              <Item product={product} setModalShow={setModalShow}></Item>
              <Badge className="quantity-badge d-flex align-items-center p-4 me-2">
                {product.quantity}
              </Badge>
              <Button
                className="add-button"
                onClick={(e) => AddProduct(e, product, dispatch)}
              >
                <BsCartPlus />
              </Button>
              <Button
                className="add-button me-2"
                onClick={(e) => RemoveProduct(e, product, dispatch)}
              >
                <BsCartDash />
              </Button>

              <Button
                className="trash-button"
                onClick={(e) => DeleteProduct(e, product, dispatch)}
              >
                <BsTrash3 />
              </Button>
            </div>
          );
        })}
      </ListGroup>
      {products.length > 0 ? (
        <Container fluid className="d-flex flex-row-reverse me-5 mt-4 pe-4">
          <Button
            className="trash-button"
            variant="danger"
            onClick={(e) => ClearProducts(e, dispatch)}
          >
            <BsTrash3 />
          </Button>
          <Badge className="total d-flex align-items-center p-4 me-2">
            Total: {total}${" "}
          </Badge>
        </Container>
      ) : null}
      <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Cart;
