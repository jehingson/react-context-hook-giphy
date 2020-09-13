import React from "react";
import "App.css";
import "componentes/styles.css";
import ListaGifs from "componentes/ListaGifs";
import { Link, Route } from "wouter";
import Home from "paginas/Home";
import Perfil from "paginas/Perfil";
import StaticContext from "Context/StaticContext";
import { GifsContextProvider } from "Context/GifsContextProvider";

function App() {
  /* const state = useState('');
  const value = state[0];
  const setValue = state[1];
 */

  return (
    <StaticContext.Provider value={{ name: "jehingos", canal: "pronto" }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>App</h1>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />

            <Route path="/buscar/:keyword" component={ListaGifs} />

            <Route path="/gif/:id" component={Perfil} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
