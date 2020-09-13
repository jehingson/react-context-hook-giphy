import React from "react";
import ListaGifsTrue from "./ListaGifsTrue";
import Spinner from "./Spinner";
import { useGifs } from "hooks/useGifs";

function ListGifs({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListaGifsTrue gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
}

export default ListGifs;
