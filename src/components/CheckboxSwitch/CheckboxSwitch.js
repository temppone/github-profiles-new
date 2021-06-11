import React from "react";
import {
  InputSwitch,
  InputSwitchContainer,
  InputSwitchLabel,
} from "./CheckboxSwitch.styled";

const CheckboxSwitch = () => {
  return (
    <InputSwitchContainer>
      <InputSwitch id="checkbox" type="checkbox" />
      <InputSwitchLabel htmlFor="checkbox" />
    </InputSwitchContainer>
  );
};

export default CheckboxSwitch;
