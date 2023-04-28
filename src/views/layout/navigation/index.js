import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HandleLogout } from "../../../dispatch/userDispatch";

function Navigation() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const loggedIn = user.token;

  const handleClick = () => {
    console.log("Logout");
    HandleLogout(dispatch);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="ms-2">
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          {loggedIn ? (
            <Navbar.Brand>{` Ciao ${user.firstName}!`}</Navbar.Brand>
          ) : (
            ""
          )}
          <Nav className="ms-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {loggedIn ? (
              <Nav.Link onClick={handleClick}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
