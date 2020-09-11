import { useEffect, useState, useContext } from "react";
import getGifs from "../servicios/getGifs";
import GifsContextProvider from "../Context/GifsContextProvider";
export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setloading] = useState(false);
  const value = useContext(GifsContextProvider);
  const [gifs, setGifs] = value.gifs;

  const keywordToUse = keyword || localStorage.getItem("keywordAnterior");

  useEffect(() => {
    //keyword es una dependencia del efecto
    async function gifs() {
      setloading(true);
      const losGifs = await getGifs({ keyword: keywordToUse });
      setGifs(losGifs);
      setloading(false);
      localStorage.setItem("keywordAnterior", keywordToUse);
    }
    gifs();
  }, [keyword]);

  return { loading, gifs };
}
