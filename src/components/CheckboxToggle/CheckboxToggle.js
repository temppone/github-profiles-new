import React from "react";
import {
  InputToggle,
  InputToggleContainer,
  InputToggleSpan,
} from "./CheckboxToggle.styled";

const CheckboxToggle = () => {
  return (
    <InputToggleContainer>
      <InputToggle type="checkbox" />
      <InputToggleSpan />
    </InputToggleContainer>
  );
};

export default CheckboxToggle;
