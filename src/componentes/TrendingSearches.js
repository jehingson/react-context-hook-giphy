import React, { useState, useEffect, useRef } from "react";
import getTrendingTemaService from "servicios/getTrendingTermaService";
import Categoria from "./Categoria";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    async function getTendecias() {
      const res = await getTrendingTemaService();
      console.log("data", res);
      setTrends(res);
    }
    getTendecias();
  }, []);

  return (
    <>
      <Categoria name="Tendencias" option={trends} />
    </>
  );
}
function useNearScreen({ elementRef }) {
  const [isNearScreen, setShow] = useState(false);

  useEffect(function () {
    let observer;
    const onchange = (entradas, observer) => {
      const el = entradas[0];
      console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onchange, {
        rootMargin: "100px",
      });
    });

    observer = new IntersectionObserver(onchange, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);

    return () => observer && observer.disconnect();
  }, []);

  return isNearScreen;
}

export default function LazyTrending() {
  const elementRef = useRef();
  const isNearScreen = useNearScreen({ elementRef });

  return (
    <div ref={elementRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
  );
}
