import { React } from "react";
import { useSelector } from "react-redux";
import { Card, Form } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/index.tsx";
import HelperCard from "../../components/HelperCard";
import Footer from "../layout/footer";
import "./style.css";

function Login() {
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <>
      <div className="LoginContainer">
        <Card body className="col-md-8 col-10 mt-4">
          <Card.Title>Welcome to E-Commerce Sample App</Card.Title>
          <Form.Text muted>Please login or signin to continue</Form.Text>
        </Card>

        <div className="Login mt-4">
          <LoginForm />
          {!isMobile && <HelperCard message={"login"} />}
        </div>
        {isMobile && <HelperCard message={"login"} />}
      </div>
      <Footer />
    </>
  );
}

export default Login;
