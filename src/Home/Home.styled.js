import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImgIntro = styled.img`
  margin-top: 5rem;
  width: 80%;
  @media screen and (min-width: 600px) {
    width: 40%;
  }
`;

export const ButtonIntro = styled.button`
  box-shadow: 5px 5px #333;
  background: #fff;
  display: block;
  width: 50%;
  font-size: 1.2rem;
  margin: 20px auto 0 auto;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ;

  :active {
    background: #333;
    color: #fff;
  }

  :hover{
    box-shadow: 0px 0px;
  }
`;
