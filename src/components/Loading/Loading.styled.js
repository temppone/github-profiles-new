import styled from "styled-components";

export const LoadingBar = styled.div`
  width: 10%;
  height: 3px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  background: #333;
  margin: 0 auto;
  animation: growUp 5s;

  @keyframes growUp {
    to {
      width: 80%;
    }
  }
`;
