import React from "react";
import ListaGifsTrue from "./ListaGifsTrue";
import Spinner from "./Spinner";
import { useGifs } from "../hooks/useGifs";

function ListGifs({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListaGifsTrue gifs={gifs} />}</>;
}

export default ListGifs;