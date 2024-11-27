import type { PlaceDetail } from "@/types/dto";

import { PlaceHeader } from "./PlaceHeader";
import { PlaceBody } from "./PlaceBody";

const PlaceDetailItem = ({ place }: { place: PlaceDetail }) => {
  return (
    <>
      <PlaceHeader {...place} />
      <PlaceBody {...place} />
    </>
  );
};

export default PlaceDetailItem;
