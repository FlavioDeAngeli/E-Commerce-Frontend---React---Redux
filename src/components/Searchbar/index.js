import { React, useRef } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import fetchProducts from "../../api/products/getProducts";
import { TbRefresh } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";

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
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search for a product..."
            ref={searchRef}
          />
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            <BiSearchAlt />
          </Button>
          <Button variant="danger" href="/">
            <TbRefresh />
          </Button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default Searchbar;
