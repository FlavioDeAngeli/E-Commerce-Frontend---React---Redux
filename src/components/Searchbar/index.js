import { React, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import fetchProducts from "../../api/products/getProducts";

function Searchbar() {
  const searchRef = useRef("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = "products/search?q=";
    const input = searchRef.current.value.trim();

    if (input.length > 2) {
      fetchProducts(dispatch, request, input);
    } else {
      alert("Inserisci una ricerca valida (almeno 3 caratteri)");
    }
  };

  return (
    <Form>
      <Form.Group className="m-3 d-flex" controlId="searchbar">
        <Form.Control
          type="text"
          placeholder="Search for a product..."
          ref={searchRef}
        />
        <Button className="ms-3" type="submit" onClick={(e) => handleSubmit(e)}>
          Ricerca
        </Button>
        <Button variant="danger" href="/">
          X
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Searchbar;
