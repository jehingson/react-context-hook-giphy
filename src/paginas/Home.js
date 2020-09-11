import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListaGifsTrue from "../componentes/ListaGifsTrue";
import { useGifs } from "../hooks/useGifs";
import Spinner from "../componentes/Spinner";
const POPULAR_GIFS = ["matrix", "shakira", "vamos", "venezuela", "positivo"];

function Home() {
  const [keyword, setkeyword] = useState("");
  const [path, pushLocation] = useLocation();
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
          <ListaGifsTrue gifs={gifs} />
          <h3 className="App-title">Ultima Busqueda</h3>
          <h3 className="App-title">Los Gifs mas populares</h3>
          <ul className="App-main">
            {POPULAR_GIFS.map((popularGif, index) => (
              <li className="App-results" key={index}>
                <Link to={`/buscar/${popularGif}`}>Gifs de {popularGif}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Home;
