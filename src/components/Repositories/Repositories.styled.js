import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepositoriesTitle = styled.h1`
  font-weight: bold;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

export const Repository = styled.div`
  width: 80%;
  background: #ffffff;
  color: #333;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: 7px 7px #333;
  border: solid 1px #333;
  margin-bottom: 2rem;
`;

export const RepositoryTitle = styled.h3`
  font-weight: bold;
`;

export const RepositoryDescription = styled.article`
  padding-bottom: 0.8rem;
`;

export const RepositoryLang = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ::before {
    content: "";
    width: 10px;
    height: 10px;
    background: tomato;
    display: inline-block;
    margin-right: 2px;
  }
`;
