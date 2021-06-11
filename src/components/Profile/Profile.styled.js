import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  ::after {
    content: "";
    display: block;
    background: #333;
    height: 5px;
    width: 70%;
    margin: 2rem 0 2rem 0;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50%;
`;

export const ProfileUsername = styled.h2``;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileLink = styled.a`
  display: block;
  

`;
