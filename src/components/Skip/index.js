import React from "react";
import { Button } from "react-bootstrap";

function Skip({ skip, setSkip }) {
  const skipForward = (e, skip, setSkip) => {
    e.preventDefault();
    setSkip(Number(skip) + 10);
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
