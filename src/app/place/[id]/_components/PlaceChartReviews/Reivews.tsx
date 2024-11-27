"use client";

import reviewQueryOptions from "@/apis/review/query";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import ReviewContext from "../../_contexts/ReviewContext";

import { Bubble } from "@/components";
import { formatWithZero } from "@/utils/pareDate";
import { typos } from "@/styles/typos.css";
import { colors } from "@/styles/colors";

const Reviews = ({ placeId }: { placeId: number }) => {
  const { time } = useContext(ReviewContext);

  const { queryKey, queryFn } = reviewQueryOptions.all(
    placeId,
    formatWithZero(time)
  );
  const { data: reviews, isLoading } = useQuery({ queryKey, queryFn });

  const formatTimeToText = (time: number) => {
    if (isLoading) return "...";
    if (!reviews || !reviews.data.length) {
      return `아직 작성된 ${time}시 리뷰가 없어요`;
    }
    if (time < 6 && time > 0) {
      return "혼잡도 정보가 없는 시간대에요. 06:00-24:00 사이의 리뷰를 확인해주세요.";
    }
  };

  if (time < 6 || isLoading || !reviews || !reviews.data.length) {
    return (
      <span
        className={typos.body}
        style={{ color: colors.gray_01, padding: "0.75rem 1.25rem" }}
      >
        {formatTimeToText(time)}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {(time < 6 || isLoading || !reviews || !reviews.data.length) && (
        <span
          className={typos.body}
          style={{ color: colors.gray_01, padding: "0.75rem 1.25rem" }}
        >
          {formatTimeToText(time)}
        </span>
      )}
      {reviews.data.map((review, key) => (
        <Bubble key={key} time={review.time} text={review.message} />
      ))}
    </div>
  );
};
export default Reviews;
