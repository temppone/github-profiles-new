import React from "react";
import {
  ProfileContact,
  ProfileContainer,
  ProfileInfos,
  ProfilePicture,
  ProfileUsername,
  ProfileLink,
  ProfileSocial,
  ProfileSocialItem,
} from "./Profile.styled";

const Profile = () => {
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    async function getData(urlApi) {
      const token = process.env.REACT_APP_HOST_API_KEY;

      const dataReponse = await fetch(urlApi, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      dataReponse
        .json()
        .then((response) => {
          setLoading(true);
          setData(response);
        })
        .catch((error) => setErrorMessage(error))
        .finally((response) => setLoading(false));
    }

    getData("https://api.github.com/users/temppone");
  }, []);


  return (
    <ProfileContainer>
      <ProfilePicture src={data.avatar_url} />
      <ProfileUsername>{data.name}</ProfileUsername>
      <ProfileInfos>
        <p>{data.login}</p>
        <ProfileSocial>
          <ProfileSocialItem>
            <span>{data.followers}</span>
            Followers
            <span>{data.following}</span>
            Following
          </ProfileSocialItem>
          <ProfileSocialItem>
            <span>{data.followers}</span>
            Stars
          </ProfileSocialItem>
        </ProfileSocial>
        <p>{data.location}</p>
      </ProfileInfos>
      <ProfileContact>
        <ProfileLink target="_blank" href={data.email}>
          {data.email}
        </ProfileLink>
        <ProfileLink target="_blank" href={data.blog}>
          {data.blog}
        </ProfileLink>
      </ProfileContact>
    </ProfileContainer>
  );
};

export default Profile;
