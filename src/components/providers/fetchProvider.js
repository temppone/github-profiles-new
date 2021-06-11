import React from "react";

export const FetchContext = React.createContext("");

export const FetchProvider = (props) => {
  const [data, setData] = React.useState("");

  return (
    <FetchContext.Provider value={{ data, setData }}>
      {props}
    </FetchContext.Provider>
  );
};

export const useData = () => React.useContext(FetchContext);
