import React from "react";
import Gif from "./Gif";

const ListaGifsTrue = ({ gifs }) => {
  return (
    <div className="listaGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
};

export default ListaGifsTrue;
