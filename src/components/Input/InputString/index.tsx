import React, { useState } from "react";
import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { InputStringProps } from "./index.types";
import "./style.css";

const InputString = forwardRef<HTMLInputElement>(function (
  props: InputStringProps,
  ref
) {
  const { id, type, placeholder, min, max } = props;

  const [validation, setValidation] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleOnFocus = () => {
    console.log(validation);
    setValidation("");
    setValidationMessage("");
    if (validation === "error") {
      setValidation("");
      setValidationMessage("");
      setErrorMessage("");
    }
  };

  const handleOnBlur = () => {
    const userInput = ref.current?.value;

    if (
      !userInput ||
      typeof userInput !== "string" ||
      userInput.length < min ||
      userInput.length > max
    ) {
      setValidation("error");
      setErrorMessage(`Please enter a valid ${id}`);
    } else {
      setValidation("valid");
      setValidationMessage("✔");
    }
  };

  return (
    <>
      {/* <Form.Group className="mb-3"> */}
      <div className="d-flex">
        <Form.Control
          className={validation}
          id={id}
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          ref={ref}
          onBlur={() => handleOnBlur()}
          onFocus={() => handleOnFocus()}
        />
        <div
          className={
            validation === "valid"
              ? `checkmark d-flex align-items-center`
              : `d-flex align-items-center`
          }
        >
          {validationMessage}
        </div>
      </div>

      <div id="error-message" className="lead mt-1">
        {errorMessage}
      </div>
      {/* </Form.Group> */}
    </>
  );
});

export default InputString;
