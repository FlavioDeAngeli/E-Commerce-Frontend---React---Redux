import { useRef } from "react";
import React from "react";
import { Card, Form, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import fetchAddUser from "../../api/auth/signin";
import createToken from "../../api/auth/token";
import { HandleLogin } from "../../dispatch/userDispatch";
import InputString from "../Input/InputString/index.tsx";

function SigninForm() {
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const user = await fetchAddUser({
      firstname,
      lastname,
      email,
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
        <InputString
          id={"firstname"}
          placeholder={"Enter your firstname"}
          max={50}
          ref={firstnameRef}
        />
        <InputString
          id={"lastname"}
          placeholder={"Enter your lastname"}
          max={50}
          ref={lastnameRef}
        />
        <InputString
          id={"email"}
          placeholder={"Enter your email"}
          max={50}
          ref={emailRef}
        />
        <InputString
          id={"password"}
          placeholder={"Enter your password"}
          max={50}
          ref={passwordRef}
        />
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
