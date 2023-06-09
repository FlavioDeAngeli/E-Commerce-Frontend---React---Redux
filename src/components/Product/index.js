import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fetchProduct from "../../api/products/getProduct";

function Product() {
  const currentProduct = useParams();
  const request = "products/";
  const options = currentProduct.id;

  const [product, setProduct] = useState({});

  const getProduct = async (request, options) => {
    const product = await fetchProduct(request, options);
    setProduct(product);
  };

  useEffect(() => {
    getProduct(request, options);
  }, [request, options]);

  return (
    <Card className="mt-4 ms-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
        <ListGroup.Item>Price: {product.price}$</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link
          href={`https://www.amazon.it/s?k=${product.title}`}
          target="_blank"
        >
          Buy on Amazon
        </Card.Link>
      </Card.Body>
      <Card.Body className="d-grid text-center">
        <Button className="btn btn-outline-primary">
          <Link className="text-light" to="/">
            Back
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
