import React, { useState } from "react";
import { useLocation } from "wouter";
import ListaGifsTrue from "componentes/ListaGifsTrue";
import { useGifs } from "hooks/useGifs";
import Spinner from "componentes/Spinner";
import TrendingSearches from "componentes/TrendingSearches";

function Home() {
  const [keyword, setkeyword] = useState("");
  const value = useLocation();
  const pushLocation = value[1];
  const { loading, gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/buscar/${keyword}`);
  };

  const handleChange = (event) => {
    setkeyword(event.target.value);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              placeholder="buscar"
              type="text"
              value={keyword}
            />
            <button>Buscar</button>
          </form>
          <h3 className="App-title">Ultima Busqueda</h3>
          <ListaGifsTrue gifs={gifs} />
          <h3 className="App-title">Los Gifs mas populares</h3>
          <div className="App-Categoria">
            <TrendingSearches name="Tendencias" />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
