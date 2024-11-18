import type { PlaceDetail } from "@/types/dto";

import { PlaceHeader } from "./PlaceHeader";
import { PlaceBody } from "./PlaceBody";

const PlaceDetail = ({ place }: { place: PlaceDetail }) => {
  return (
    <>
      <PlaceHeader placeName={place.placeName} imageUrl={place.imageUrl} />
      <PlaceBody {...place} />
    </>
  );
};

export default PlaceDetail;
