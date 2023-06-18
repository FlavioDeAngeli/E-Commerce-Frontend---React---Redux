import React, { useState, useRef, useEffect } from "react";
// import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { InputStringProps } from "./index.types";
import "./style.css";

// const InputString = forwardRef<HTMLInputElement>(function (
//   props: InputStringProps,
//   ref
// ) {

const InputString = (props: InputStringProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<string>("");

  const { id, type, placeholder, min, max, handleChange } = props;

  const [validation, setValidation] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    handleChange(inputValue);
  }, [inputValue, handleChange]);

  const handleOnFocus = () => {
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

  //   //TODO - FIX PASSWORD VALIDATION + CREATE EMAIL VALIDATION

  //   if (type === "password") {
  //     const upper = /^[A-Z]+$/.test(userInput);
  //     const lower = /^[a-z]+$/.test(userInput);
  //     const numbers = /^[0-9]+$/.test(userInput);

  //     const valid = upper && lower && numbers;
  //     console.log(valid);
  //   }
  // };

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
          onChange={(e) => setInputValue(e.currentTarget.value)}
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
};

export default InputString;
