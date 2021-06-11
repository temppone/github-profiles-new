import styled from "styled-components";

export const InputToggleContainer = styled.div``;

export const InputToggleSpan = styled.span`
  display: block;
  width: 2rem;
  height: 1rem;
  background: tomato;
  transition: ease-in 0.5s;
`;

export const InputToggle = styled.input`
  [type="checkbox"] {
    width: 20px;
    height: 20px;
    background: tomato;
    padding: 20px;
    position: relative;
    display: none;
  }

  input[type="checkbox"]:checked ~ ${InputToggleSpan} {
    background: #fff;
  }
`;
