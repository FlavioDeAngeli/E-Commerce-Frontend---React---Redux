import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar
        bg="secondary"
        variant="dark"
        sticky="bottom"
        className="text-center mt-5"
      >
        <Navbar.Text className="col-12" href="#home">
          © Flavio De Angeli - 2023
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default Footer;
