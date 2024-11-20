"use client";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";

export const Map = ({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) => {
  const NaverMapComponent = () => {
    const navermaps = useNavermaps();
    return (
      <NaverMap
        defaultCenter={
          new navermaps.LatLng(Number(latitude), Number(longitude))
        }
      >
        <Marker
          defaultPosition={{
            lat: Number(latitude),
            lng: Number(longitude),
          }}
        />
      </NaverMap>
    );
  };
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <MapDiv
        style={{
          height: 400,
        }}
      >
        <NaverMapComponent />
      </MapDiv>
    </NavermapsProvider>
  );
};
