import React, { Suspense } from "react";
import useNearScreen from "hooks/useNeaeScreen";
import Spinner from "./Spinner";

const TrendingSearchesOn = React.lazy(() => import("./TrendingSearchesOn"));

export default function LazyTrending() {
  const { isNearScreen, elementRef } = useNearScreen({ distancia: "0px" });
  console.log(isNearScreen);

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearchesOn /> : <Spinner />}
      </Suspense>
    </div>
  );
}
