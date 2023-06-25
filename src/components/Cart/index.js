import { React, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListGroup, Button, Badge, Container } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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
  const isMobile = useSelector((state) => state.ui.isMobile);
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

  //PayPal Payment section ----------------------------------------------------------------
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transazione completata! Grazie per i tuoi acquisti ${name}.`);
    });
  };

  // --------------------------------------------------------------------------------------

  return (
    <>
      {products.length ? (
        <div className="d-flex  align-items-center">
          <h3 className="mt-3 ms-4 ">
            Esegui il checkout oppure acquista altri prodotti:
          </h3>
        </div>
      ) : (
        <h3 className="mt-3 ms-4 ">
          Carrello vuoto. Continua i tuoi acquisti!
        </h3>
      )}

      <ListGroup className="col-12 ps-2 pt-2">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="itemBox d-inline-flex ms-4 me-4 mb-2"
            >
              <Item product={product} setModalShow={setModalShow}></Item>
              <Badge
                className={`quantity-badge d-flex align-items-center ${
                  !isMobile && "p-4"
                } me-2`}
              >
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
        <>
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

          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              className="checkoutBtn"
              style={{
                layout: "horizontal",
                color: "black",
                label: "checkout",
              }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </>
      ) : null}
      <ProductModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Cart;
