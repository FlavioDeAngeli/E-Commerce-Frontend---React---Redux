import { React } from "react";
import { Card, Form } from "react-bootstrap";
import SigninForm from "../../components/SigninForm";
import HelperCard from "../../components/HelperCard";
import Footer from "../layout/footer";
import "./style.css";

function Signin() {
  return (
    <>
      <div className="SigninContainer">
        <Card body className="col-8 mt-4">
          <Card.Title>Welcome to E-Commerce App Sample</Card.Title>
          <Form.Text id="passwordHelpBlock" muted>
            Please login or signin to continue
          </Form.Text>
        </Card>
        <div className="Signin mt-4">
          <SigninForm />
          <HelperCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
