import { React, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import fetchAuth from "../../api/auth/login";
import { HandleLogin } from "../../dispatch/userDispatch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Login() {
  // const [cookies, setCookies] = useCookies(["auth"]);
  // const [loginOk, setLoginOk] = useState(null)
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = await fetchAuth({ username, password });
    // console.log(user);
    HandleLogin(user, dispatch);
    navigate("/");
    // if (token) {
    // setCookies("auth", true);
    // }
  };
  // const addUser = () => {
  //   fetch("https://dummyjson.com/users/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       firstName: "Carlo",
  //       lastName: "Amore",
  //       age: 34,
  //       /* other user data */
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // };

  // const getUser = () => {
  //   fetch("https://dummyjson.com/users/101")
  //     .then((res) => res.json())
  //     .then(console.log);
  // };

  return (
    <div className="m-4">
      <h2 className="mb-4">Login Page</h2>
      <Form className="col-4">
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
        <Button variant="primary" onClick={handleClick}>
          Login
        </Button>
        <Button href="/signin" className="ms-3" variant="primary">
          Signin
        </Button>
      </Form>
    </div>
  );
}

export default Login;
