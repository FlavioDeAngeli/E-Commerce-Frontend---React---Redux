import React from "react";
import { useState, useRef } from "react";
import { Card, Form, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import fetchAddUser from "../../api/auth/signin";
import createToken from "../../api/auth/token";
import { HandleLogin } from "../../dispatch/userDispatch";
import InputString from "../Input/InputString/index.tsx";

function SigninForm() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const firstnameRef = useRef<HTMLInputElement>(null);
  // const lastnameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const firstname: string = firstnameRef.current.value;
    // const lastname: string = lastnameRef.current.value;
    // const email: string = emailRef.current.value;
    // const password: string = passwordRef.current.value;
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
      <Form className="m-4" onSubmit={handleSubmit}>
        <Card.Title className="text-center mb-4">Signin</Card.Title>
        <InputString
          id={"firstname"}
          type="text"
          placeholder={"Enter your firstname"}
          min={1}
          max={50}
          handleChange={setFirstname}
        />
        <InputString
          id={"lastname"}
          type="text"
          placeholder={"Enter your lastname"}
          min={1}
          max={50}
          handleChange={setLastname}
        />
        <InputString
          id={"email"}
          type="email"
          placeholder={"Enter your email"}
          min={6}
          max={50}
          handleChange={setEmail}
        />
        <InputString
          id={"password"}
          type="password"
          placeholder={"Enter your password"}
          min={6}
          max={50}
          handleChange={setPassword}
        />
        <div className="d-grid mt-4">
          <Button type="submit" variant="outline-primary">
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
