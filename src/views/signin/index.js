import { React, useRef } from "react";
import { Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import fetchAddUser from "../../api/auth/signin";
// import { HandleLogin } from "../../dispatch/userDispatch";

function Signin() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

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
    console.log(user);
    // HandleLogin(user, dispatch);
    // navigate("/");
  };
  return (
    <div className="m-4">
      <h2 className="mb-4">Signin Page</h2>
      <Form className="col-4">
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            ref={firstnameRef}
            type="text"
            placeholder="Enter FirstName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            ref={lastnameRef}
            type="text"
            placeholder="Enter Lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button href="/login" variant="primary">
          Login
        </Button>
        <Button
          className="ms-3"
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Signin
        </Button>
      </Form>
    </div>
  );
}

export default Signin;
