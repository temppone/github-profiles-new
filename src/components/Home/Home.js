import React from "react";
import Input from "../Input/Input";
import imgIntro from "./img/imgIntro.svg";
import { ButtonIntro, HomeContainer, ImgIntro } from "./Home.styled";

console.log()
const Home = () => {
  const [searchInputUser, setSearchInputUser] = React.useState();

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HomeContainer>
      <form action={handleSubmit}>
        <Input
          label={<h1>GitHub Profiles</h1>}
          id="searchInputUser"
          value={searchInputUser}
          setValue={setSearchInputUser}
          placeholder="Username"
        />
        <ButtonIntro type="submit">Search</ButtonIntro>
      </form>
      <ImgIntro src={imgIntro}></ImgIntro>
    </HomeContainer>
  );
};

export default Home;
