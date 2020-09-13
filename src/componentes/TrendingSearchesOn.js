import React, { useState, useEffect } from "react";
import getTrendingTemaService from "servicios/getTrendingTermaService";
import Categoria from "./Categoria";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTemaService().then(setTrends);
  }, []);

  return (
    <>
      <Categoria name="Tendencias" option={trends} />
    </>
  );
}
