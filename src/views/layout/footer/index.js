import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function Footer() {
  return (
    <>
      <Navbar
        bg="secondary"
        variant="dark"
        sticky="bottom"
        className="Footer text-center p-0"
      >
        <Navbar.Text className="col-12" href="#home">
          © Flavio De Angeli - 2023
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default Footer;
