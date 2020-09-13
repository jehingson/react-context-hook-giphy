import { useEffect, useState, useRef } from "react";

export default function useNearScreen({ distancia = "100px" } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const elementRef = useRef();
  useEffect(function () {
    let observer;
    const onchange = (entradas, observer) => {
      const el = entradas[0];
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
        rootMargin: distancia,
      });
    });

    observer = new IntersectionObserver(onchange, {
      rootMargin: distancia,
    });

    observer.observe(elementRef.current);

    return () => observer && observer.disconnect();
  }, []);

  return { isNearScreen, elementRef };
}
