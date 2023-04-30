import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Badge } from "react-bootstrap";

function CategoriesList() {
  const categories = useSelector((state) => state.categories.categories);
  let navigate = useNavigate();

  function handleClick(e, category) {
    e.preventDefault();
    navigate(`/categories/${category}`);
  }

  return (
    <Container className="CategoriesList col-12 m-0 d-flex pb-3 overflow-auto">
      {categories.map((category) => {
        return (
          <Badge
            bg="success"
            className="m-1"
            key={`badge-${category}`}
            onClick={(e) => handleClick(e, category)}
          >
            {category.toUpperCase()}
          </Badge>
        );
      })}
    </Container>
  );
}

export default CategoriesList;
