import { CardDetail, Figure, Map } from "@/components";
import { vars } from "@/styles/theme.css";

import { cardContainer, twoColumnContainer } from "./PlaceDetail.css";
import { PlaceDetail } from "@/types/dto";
import PlaceChartReviews from "./PlaceChartReviews";

export const PlaceBody = (place: PlaceDetail) => {
  const {
    placeId,
    timeLine,
    statusKeyword,
    trafficCommunicationMsg,
    populationDensityMsg,
    location,
    latitude,
    longitude,
    isVisit,
  } = place;

  const [densityMsg, trafficMsg] = populationDensityMsg.split(". ");

  return (
    <div className={cardContainer}>
      <div className={twoColumnContainer}>
        <CardDetail
          title="인구 밀도"
          text={densityMsg}
          rightChild={<Figure text={statusKeyword} />}
        />
        <CardDetail
          title="도로 소통"
          text={trafficMsg}
          rightChild={<Figure text={trafficCommunicationMsg} />}
        />
      </div>
      <PlaceChartReviews
        placeId={placeId}
        timeLine={timeLine}
        isVisit={isVisit}
      />
      <CardDetail
        title="위치 정보"
        text={location}
        content={
          <div
            style={{
              width: "100%",
              height: 400,
              borderRadius: "0.5rem",
              background: vars.color.gray_05,
            }}
          >
            <Map latitude={latitude} longitude={longitude} />
          </div>
        }
      />
    </div>
  );
};
