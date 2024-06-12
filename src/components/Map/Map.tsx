"use client";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  NavermapsProvider,
} from "react-naver-maps";

export const Map = () => {
  return (
    <NavermapsProvider ncpClientId={process.env.NAVERMAPS_CLIENT_ID || ""}>
      <MapDiv
        style={{
          height: 400,
        }}
      >
        <NaverMap>
          <Marker
            defaultPosition={{ lat: 37.554371328, lng: 126.9227542239 }}
          />
        </NaverMap>
      </MapDiv>
    </NavermapsProvider>
  );
};
