import React from "react";
import { useData } from "../providers/fetchProvider";

const Fetch = ({ urlApi, userSearch }) => {
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { data, setData } = useData();

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

  return <div></div>;
};

export default Fetch;
