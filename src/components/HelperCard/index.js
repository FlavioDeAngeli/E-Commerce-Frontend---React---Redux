import React from "react";
import { Card } from "react-bootstrap";

function HelperCard({ message }) {
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
        {message === "login" && (
          <>
            <div className="d-flex text-start m-2">
              <div className="col-5">
                <strong>Username:</strong>
              </div>
              kminchelle
            </div>
            <div className="d-flex text-start m-2">
              <div className="col-5">
                <strong> Password:</strong>
              </div>
              0lelplR
            </div>
          </>
        )}
        {message === "signin" && (
          <>
            <Card.Text className="text-start m-2">
              This registration system is a sample, your data won't be stored or
              shared with anyone.
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default HelperCard;
