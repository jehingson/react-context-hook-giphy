import { useContext } from "react";
import GifsContextProvider from "../Context/GifsContextProvider";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContextProvider);

  return gifs;
}
