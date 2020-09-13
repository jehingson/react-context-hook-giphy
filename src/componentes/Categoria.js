import React from "react";
import { Link } from "wouter";

const Categoria = ({ option = [], name }) => {
  return (
    <div className="Categoria">
      <h3 className="App-title">Tendencia</h3>
      <ul className="App-main">
        {option.map((popularGif, index) => (
          <li className="App-results" key={index}>
            <Link to={`/buscar/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoria;
