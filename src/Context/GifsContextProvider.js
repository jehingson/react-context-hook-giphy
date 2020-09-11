import React, { useState } from "react";
const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  //chldren es lo que le llaga de las props, y es parametro a envolver
  const [gifs, getGifs] = useState([]);

  const value = {
    gifs: [gifs, getGifs],
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
