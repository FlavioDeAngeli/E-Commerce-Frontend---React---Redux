import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="bottom" className="mt-5">
        <Container>
          <Navbar.Brand href="#home">Flavio De Angeli - 2023</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
