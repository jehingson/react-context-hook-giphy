import React from "react";
import Gif from "../componentes/Gif";
import useGlobalGif from "../hooks/useGlobalGIf";

function Pefil({ params }) {
  const value = useGlobalGif();
  const gifs = value[0];

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  return <Gif {...gif} />;
}

export default Pefil;
