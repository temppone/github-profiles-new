import styled from "styled-components";

export const InputSwitchContainer = styled.div`
  position: relative;
`;

export const InputSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 20px;
  position: relative;
  transition: background-color 0.2s;
  background: #333;
  &:after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin: 3px;
    background: #fff;
    transition: 0.2s;
  }
`;

export const InputSwitch = styled.input`
  opacity: 0;
  z-index: 1;
  width: 40px;
  height: 20px;
  &:checked + ${InputSwitchLabel} {
    background: #ddd;
    &::after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      margin-left: 20px;
      transition: 0.2s;
      background: #333;
    }
  }
`;
