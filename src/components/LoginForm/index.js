import { React, useRef } from "react";
import { Card, Form, Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import fetchAuth from "../../api/auth/login";
import { HandleLogin } from "../../dispatch/userDispatch";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = await fetchAuth({ username, password });
    HandleLogin(user, dispatch);
    navigate("/");
  };

  return (
    <Card className="LoginForm col-4 m-3" border="primary">
      <Form className="m-4">
        <Card.Title className="text-center mb-4">Login</Card.Title>

        <Form.Group className="mb-3" controlId="username">
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter your username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <div className="d-grid mt-4">
          <Button variant="outline-primary" onClick={handleClick}>
            Login
          </Button>
        </div>
        <Nav>
          <Nav.Item className="col-12">
            <Nav.Link className="primary text-center mt-3" href="/signin">
              Don't have an account? Please Signin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Form>
    </Card>
  );
}

export default LoginForm;
