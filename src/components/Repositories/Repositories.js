import React from "react";
import {
  RepositoriesContainer,
  RepositoriesTitle,
  Repository,
  RepositoryDescription,
  RepositoryLang,
  RepositoryTitle,
} from "./Repositories.styled";

const Repositories = (userInputSearch) => {
  userInputSearch = "temppone";

  const [repoLoading, setRepoLoading] = React.useState(false);
  const [repos, setRepos] = React.useState(null);
  const [errorRepo, setErrorRepo] = React.useState(null);

  React.useEffect(() => {
    async function getRepo(urlApiRepo) {
      const token = process.env.REACT_APP_HOST_API_KEY;

      const repoResponse = await fetch(urlApiRepo, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      repoResponse
        .json()
        .then((repoResponse) => {
          setRepoLoading(true);
          setRepos(repoResponse);
        })
        .catch((error) => setErrorRepo(error))
        .finally((repoResponse) => setRepoLoading(false));
    }

    getRepo(`https://api.github.com/users/${userInputSearch}/repos`);
  },[]);

  console.log(repos);
  console.log(userInputSearch);

  return (
    <RepositoriesContainer>

      <RepositoriesTitle>Repositories</RepositoriesTitle>
      {repos.map((repo) => (
        <Repository>
          <RepositoryTitle>
            {repo.name}
          </RepositoryTitle>
          <RepositoryDescription>
            {repo.description}
          </RepositoryDescription>
          <RepositoryLang>
            {repo.language}
          </RepositoryLang>
        </Repository>
      ))}
      <Repository>
        <RepositoryTitle>Nome do respositorio</RepositoryTitle>
        <RepositoryDescription>
          Descrição do repositorio muito bome sse
        </RepositoryDescription>
        <RepositoryLang>Language</RepositoryLang>
      </Repository>
    </RepositoriesContainer>
  );
};

export default Repositories;
