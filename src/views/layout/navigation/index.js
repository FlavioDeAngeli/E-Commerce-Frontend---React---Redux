import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ClearProducts } from "../../../dispatch/cartDispatch";
import { HandleLogout } from "../../../dispatch/userDispatch";
import { Navigate } from "react-router";
import { AiOutlineUser } from "react-icons/ai";
import "./style.css";

function Navigation() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const loggedIn = user.token;

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
          <Nav.Link href="/cart">Cart</Nav.Link>
          {loggedIn ? (
            <>
              <Nav.Link onClick={(e) => handleClick(e)} href="/">
                Logout
              </Nav.Link>
              <Nav.Link className="active ms-4">
                {user.firstName}
                <AiOutlineUser className="user-icon ms-2" />
              </Nav.Link>
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
