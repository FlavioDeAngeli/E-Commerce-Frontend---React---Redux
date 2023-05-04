import React from "react";
import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { InputStringProps } from "./index.types";

const InputString = forwardRef<HTMLInputElement>(function (
  props: InputStringProps,
  ref
) {
  const { id, placeholder, max } = props;

  const handleOnBlur = () => {
    // console.log("blur del campo ", id);
    // console.log(ref.current?.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Control
        id={id}
        type="text"
        placeholder={placeholder}
        max={max}
        ref={ref}
        onBlur={() => handleOnBlur()}
      />
    </Form.Group>
  );
});

export default InputString;
