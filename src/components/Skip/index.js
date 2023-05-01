import React from "react";
import { useSelector } from "react-redux";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { SKIP_STEP, TOTAL_PRODUCTS, API_FETCH_LIMIT } from "../../config";
import "./style.css";

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
        <GrFormPreviousLink
          className="arrow"
          onClick={(e) => skipBackward(e, skip, setSkip)}
        />
      )}

      {products.length >= API_FETCH_LIMIT &&
        skip < TOTAL_PRODUCTS - SKIP_STEP && (
          <GrFormNextLink
            className="arrow"
            onClick={(e) => skipForward(e, skip, setSkip)}
          />
        )}
    </div>
  );
}

export default Skip;
