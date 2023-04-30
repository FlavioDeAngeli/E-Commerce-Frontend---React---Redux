import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { SKIP_STEP, TOTAL_PRODUCTS, API_FETCH_LIMIT } from "../../config";

function Skip({ skip, setSkip }) {
  const products = useSelector((state) => state.product.products);

  const skipForward = (e, skip, setSkip) => {
    e.preventDefault();
    setSkip(Number(skip) + SKIP_STEP);
  };

  const skipBackward = (e, skip, setSkip) => {
    e.preventDefault();
    setSkip(Number(skip) - SKIP_STEP);
  };

  return (
    <div className="d-flex justify-content-center">
      {skip > 0 && (
        <Button onClick={(e) => skipBackward(e, skip, setSkip)} className="m-1">
          -
        </Button>
      )}

      {products.length >= API_FETCH_LIMIT &&
        skip < TOTAL_PRODUCTS - SKIP_STEP && (
          <Button
            onClick={(e) => skipForward(e, skip, setSkip)}
            className="m-1"
          >
            +
          </Button>
        )}
    </div>
  );
}

export default Skip;
