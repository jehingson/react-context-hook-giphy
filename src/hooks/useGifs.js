import { useEffect, useState, useContext } from "react";
import getGifs from "../servicios/getGifs";
import GifsContextProvider from "../Context/GifsContextProvider";

const INICIA_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setloading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [page, setPage] = useState(INICIA_PAGE);
  const value = useContext(GifsContextProvider);
  const [gifs, setGifs] = value.gifs;

  const keywordToUse =
    keyword || localStorage.getItem("keywordAnterior") || "random";

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
  }, [keyword, keywordToUse, getGifs]);

  useEffect(() => {
    if (page === INICIA_PAGE) return;

    setLoadingNext(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNext(false);
    });
  }, [keyword, page, setGifs]);

  return { loading, loadingNext, gifs, setPage };
}
