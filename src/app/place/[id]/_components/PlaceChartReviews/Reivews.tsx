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

  if (!reviews || isLoading || !reviews.data.length) {
    return (
      <span
        className={typos.body}
        style={{ color: colors.gray_01, padding: "0 1rem" }}
      >
        아직 작성된 {time}시 리뷰가 없어요
      </span>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {reviews.data.map((review, key) => (
        <Bubble key={key} time={review.time} text={review.message} />
      ))}
    </div>
  );
};
export default Reviews;
