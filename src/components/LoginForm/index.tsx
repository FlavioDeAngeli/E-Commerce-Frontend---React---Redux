import React from "react";
import { useState, useRef } from "react";
import { Card, Form, Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import fetchAuth from "../../api/auth/login";
import { HandleLogin } from "../../dispatch/userDispatch";
import InputString from "../Input/InputString/index.tsx";
import "./style.css";

function LoginForm() {
  const [error, setError] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(usernameRef);

  const showErrorMessage = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => setError(""), 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const user = await fetchAuth({ username, password });
    console.log(username, password);
    if (!username || typeof username !== "string" || username.length === 0) {
      showErrorMessage("Inserisci il nome utente!");
      return;
    } else if (!password || password.length === 0) {
      showErrorMessage("Inserisci la tua password!");
      return;
    } else {
      HandleLogin(user, dispatch);
      navigate("/");
    }
  };

  return (
    <Card className="LoginForm col-4 m-3" border="primary">
      <Form className="m-4" onSubmit={handleSubmit}>
        <Card.Title className="text-center mb-4">Login</Card.Title>
        {error && <div className="error-message">{error}</div>}
        <InputString
          id={"username"}
          placeholder={"Enter your username"}
          max={50}
        />
        {/* <Form.Group className="mb-3" controlId="username">
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter your username"
          />
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="password">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group> */}
        <div className="d-grid mt-4">
          <Button type="submit" variant="outline-primary">
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
