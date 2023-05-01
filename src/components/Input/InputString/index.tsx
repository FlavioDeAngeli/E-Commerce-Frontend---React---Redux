import React from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { InputStringProps } from "./index.types";

const InputString = (props: InputStringProps) => {
  const { id, placeholder, max } = props;

  const ref = useRef<HTMLInputElement>(null);

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
};

export default InputString;
