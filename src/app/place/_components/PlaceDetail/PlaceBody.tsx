import { typos } from "@/styles/typos.css";
import {
  Bubble,
  Button,
  CardDetail,
  Figure,
  Tag,
  Chart,
  Map,
} from "@/components";
import Link from "next/link";
import { ServerImage } from "@/components/Image/ServerImage";

import { vars } from "@/styles/theme.css";

import { cardContainer, twoColumnContainer } from "./index.css";
import { PlaceDetail } from "@/types/dto";

export const PlaceBody = (place: PlaceDetail) => {
  const {
    statusKeyword,
    trafficCommunicationMsg,
    populationDensityMsg,
    latitude,
    longitude,
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
      <CardDetail
        title="실시간 인구 추이"
        content={
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                background: vars.color.gray_06,
              }}
            >
              <Chart />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Bubble time="22:00" text="여기 사람 개많음" />
              <Bubble time="22:30" text="클럽거리 밤 10시 이후에 가지 마세요" />
              <Bubble time="22:00" text="너무 더러워요" />
            </div>
          </div>
        }
      />
      <CardDetail
        title="위치 정보"
        text="서울 마포구 와우산로"
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
