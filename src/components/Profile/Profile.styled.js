import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;

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

export const ProfileUsername = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0;
`;

export const ProfileSocial = styled.div`
  font-size: 1rem;
`;

export const ProfileSocialItem = styled.p`
  display: flex;
  justify-content: center;
  margin: 0.5rem;

  span {
    font-weight: bold;
    margin-right: 0.1rem;
    margin-left: 0.4rem;
  }
`;

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
