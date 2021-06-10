import React from "react";

export const ModesContext = React.createContext({});

export const ModesProvider = (props) => {
  const [mode, setMode] = React.useState(false);

  return (
    <ModesContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ModesContext.Provider>
  );
};
