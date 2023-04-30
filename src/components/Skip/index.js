import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

//TODO - CORREGGERE LIMITAZIONI SKIP

function Skip({ skip, setSkip }) {
  const products = useSelector((state) => state.product.products);
  console.log(products.length);

  const skipForward = (e, skip, setSkip) => {
    e.preventDefault();
    if (products.length > 10) {
      setSkip(Number(skip) + 10);
    }
  };

  const skipBackward = (e, skip, setSkip) => {
    e.preventDefault();
    setSkip(Number(skip) - 10);
  };

  return (
    <div className="d-flex justify-content-center">
      <Button onClick={(e) => skipBackward(e, skip, setSkip)} className="m-1">
        -
      </Button>
      <Button onClick={(e) => skipForward(e, skip, setSkip)} className="m-1">
        +
      </Button>
    </div>
  );
}

export default Skip;
