import React from "react";
import {InputContainer} from "./Input.styled"

const Input = ({ id, label, value, setValue, ...props }) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;
