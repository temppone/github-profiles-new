import React from "react";
import {
  ProfileContact,
  ProfileContainer,
  ProfileInfos,
  ProfilePicture,
  ProfileUsername,
} from "./Profile.styled";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfilePicture
        src={"https://avatars.githubusercontent.com/u/11913605?v=4"}
      />
      <ProfileUsername>Temppone</ProfileUsername>
      <ProfileInfos></ProfileInfos>
      <ProfileContact></ProfileContact>
    </ProfileContainer>
  );
};

export default Profile;
