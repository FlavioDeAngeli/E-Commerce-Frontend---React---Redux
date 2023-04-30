import React from "react";
import Navigation from "../layout/navigation";
import Footer from "../layout/footer";
import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { CATEGORY_IMAGES } from "../../resources";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div className="Categories">
      <Navigation />
      <Container fluid className="d-flex flex-wrap p-4">
        {categories.map((category) => {
          return (
            <Card
              key={`card-${category}`}
              className="m-3"
              style={{ width: "14rem" }}
            >
              <Card.Body>
                <Card.Title className="text-center">{category}</Card.Title>
              </Card.Body>

              <Card.Img
                variant="top"
                src={`${CATEGORY_IMAGES[category.replace("-", "")]}`}
              />
              <Card.Body className="text-center align-bottom">
                <Button variant="primary" size="sm">
                  View Products
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
      <Footer />
    </div>
  );
}

export default Categories;
