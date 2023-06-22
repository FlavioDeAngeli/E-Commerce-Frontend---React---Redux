import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ClearProducts } from "../../../dispatch/cartDispatch";
import { HandleLogout } from "../../../dispatch/userDispatch";
import { Navigate } from "react-router";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import "./style.css";

function Navigation() {
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
      <Navbar className="Navigation" variant="dark">
        <Navbar.Brand href="/">E-Commerce Sample App</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Products</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/cart">
            Cart <BsCart2 className="cart-icon" />
            {cartQuantity > 0 && cartQuantity}
          </Nav.Link>
          {loggedIn ? (
            <>
              <AiOutlineUser className="active user-icon mt-2 ms-5 pt-0" />
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={user.firstName}
                menuVariant="dark"
              >
                <NavDropdown.Item href="/">
                  <div onClick={(e) => handleClick(e)}>Logout</div>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <Nav.Link href="/login">Login </Nav.Link>
          )}
        </Nav>
      </Navbar>
    );
  }
  return <Navigate replace to="/login" />;
}

export default Navigation;
