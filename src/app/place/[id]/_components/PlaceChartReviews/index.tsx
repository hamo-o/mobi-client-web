"use client";

import { PlaceDetail } from "@/types/dto";
import Reviews from "./Reivews";
import { Chart, CardDetail } from "@/components";
import { vars } from "@/styles/theme.css";
import { useState } from "react";
import ReviewContext from "../../_contexts/ReviewContext";

const PlaceChartReviews = ({
  placeId,
  timeLine,
}: Pick<PlaceDetail, "placeId" | "timeLine">) => {
  const [time, setTime] = useState<number>(new Date().getHours());

  return (
    <ReviewContext.Provider value={{ time, setTime }}>
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
              <Chart timeLine={timeLine} />
            </div>
            <Reviews placeId={placeId} />
          </div>
        }
      />
    </ReviewContext.Provider>
  );
};

export default PlaceChartReviews;
