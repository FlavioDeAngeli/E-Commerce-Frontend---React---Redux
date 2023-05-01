import { React } from "react";
import { Card, Form } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";
import HelperCard from "../../components/HelperCard";
import Footer from "../layout/footer";
import "./style.css";

function Login() {
  return (
    <>
      <div className="LoginContainer">
        <Card body className="col-8 mt-4">
          <Card.Title>Welcome to E-Commerce Sample App</Card.Title>
          <Form.Text muted>Please login or signin to continue</Form.Text>
        </Card>
        <div className="Login mt-4">
          <LoginForm />
          <HelperCard message={"login"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
