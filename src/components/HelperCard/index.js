import React from "react";
import { Card } from "react-bootstrap";

function HelperCard() {
  return (
    <Card
      className="HelperCard text-center col-3 m-3"
      style={{ height: "100%" }}
      border="success"
    >
      <Card.Header>Help Card</Card.Header>
      <Card.Body>
        <Card.Text className="mb-4">
          <strong>Login with sample User or Signin</strong>
        </Card.Text>
        <Card.Text className="text-start m-2">
          <strong className="me-2">Username:</strong> kminchelle
        </Card.Text>
        <Card.Text className="text-start m-2">
          <strong className="me-2">Password:</strong> 0lelplR
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HelperCard;
