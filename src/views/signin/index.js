import { React } from "react";
import { Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import SigninForm from "../../components/SigninForm/index.tsx";
import HelperCard from "../../components/HelperCard";
import Footer from "../layout/footer";
import "./style.css";

function Signin() {
  const isMobile = useSelector((state) => state.ui.isMobile);

  return (
    <>
      <div className="SigninContainer">
        <Card body className="col-md-8 col-10 mt-4">
          <Card.Title>Welcome to E-Commerce App Sample</Card.Title>
          <Form.Text muted>Please login or signin to continue</Form.Text>
        </Card>
        <div className="Signin mt-4">
          <SigninForm />
          {!isMobile && <HelperCard message={"signin"} />}
        </div>
        {isMobile && <HelperCard message={"signin"} />}
      </div>
      <Footer />
    </>
  );
}

export default Signin;
