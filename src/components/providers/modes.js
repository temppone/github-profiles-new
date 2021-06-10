import React from "react";

export const ModesContext = React.createContext({});

export const ModesProvider = (props) => {
  const [modes, setModes] = React.useState(false);

  return (
    <ModesContext.Provider value={{ modes, setModes }}>
      {props.children}
    </ModesContext.Provider>
  );
};
