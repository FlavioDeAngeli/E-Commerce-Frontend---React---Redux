import { React, useRef } from "react";
import { Card, Form, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import fetchAddUser from "../../api/auth/signin";
import createToken from "../../api/auth/token";
import { HandleLogin } from "../../dispatch/userDispatch";

function SigninForm() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = await fetchAddUser({
      firstname,
      lastname,
      username,
      password,
    });

    user.token = createToken();
    HandleLogin(user, dispatch);
    navigate("/");
  };

  return (
    <Card className="LoginForm col-4 m-3" border="primary">
      <Form className="m-4">
        <Card.Title className="text-center mb-4">Signin</Card.Title>

        <Form.Group className="mb-3" controlId="firstname">
          <Form.Control
            ref={firstnameRef}
            type="text"
            placeholder="Enter your firstname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Control
            ref={lastnameRef}
            type="text"
            placeholder="Enter your lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Control
            ref={usernameRef}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Choose a password"
          />
        </Form.Group>
        <div className="d-grid mt-4">
          <Button variant="outline-primary" onClick={handleClick}>
            Signin
          </Button>
        </div>
        <Nav>
          <Nav.Item className="col-12">
            <Nav.Link className="primary mt-3" href="/login">
              Already registered? Please Login
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Form>
    </Card>
  );
}

export default SigninForm;
