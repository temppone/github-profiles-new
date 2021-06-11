import React from "react";
import {
  ProfileContact,
  ProfileContainer,
  ProfileInfos,
  ProfilePicture,
  ProfileUsername,
  ProfileLink,
} from "./Profile.styled";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfilePicture
        src={"https://avatars.githubusercontent.com/u/11913605?v=4"}
      />
      <ProfileUsername>Gustavo Temppone</ProfileUsername>
      <ProfileInfos>
        <p>Temppone</p>
        <p>Juiz de Fora - MG</p>
      </ProfileInfos>
      <ProfileContact>
        <ProfileLink href="">gtvtempone@gmail.com</ProfileLink>
        <ProfileLink href="">https://sitegustavotempone.com.com</ProfileLink>
      </ProfileContact>
    </ProfileContainer>
  );
};

export default Profile;
