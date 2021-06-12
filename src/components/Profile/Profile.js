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
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    async function getData(urlApi) {
      const token = process.env.REACT_APP_GITHUB_API;

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

    console.log(data);

    getData("https://api.github.com/user/temppone");
  }, []);

  return (
    <ProfileContainer>
      <ProfilePicture
        src={"https://avatars.githubusercontent.com/u/11913605?v=4"}
      />
      <ProfileUsername>Gustavo Tempone</ProfileUsername>
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
