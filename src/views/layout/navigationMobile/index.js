import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ClearProducts } from "../../../dispatch/cartDispatch";
import { HandleLogout } from "../../../dispatch/userDispatch";
import { Navigate } from "react-router";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import "./style.css";

function NavigationMobile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const cartProducts = useSelector((state) => state.cart.cart);
  const loggedIn = user.token;

  let cartQuantity = 0;
  cartProducts?.forEach((product) => {
    cartQuantity = cartQuantity + product.quantity;
  });

  const handleClick = (e) => {
    ClearProducts(e, dispatch);
    HandleLogout(dispatch);
  };

  if (user.token) {
    return (
      <Navbar
        className="Navigation"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand className="ms-4" href="/">
          E-Commerce
        </Navbar.Brand>
        <Nav className="ms-auto user pt-2">
          <AiOutlineUser className="user-icon me-1 mt-2" />
          <Nav.Link className="active">{user.firstName}</Nav.Link>
          <Nav.Link className="active" href="/cart">
            <BsCart2 className="cart-icon ms-3 mb-1" />
            {cartQuantity > 0 && cartQuantity}
          </Nav.Link>
        </Nav>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            {loggedIn ? (
              <Nav.Link className="user active pt-0">
                <Nav.Link onClick={(e) => handleClick(e)} href="/">
                  Logout
                </Nav.Link>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return <Navigate replace to="/login" />;
}

export default NavigationMobile;
