"use client";

import reviewQueryOptions from "@/apis/review/query";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import ReviewContext from "../../_contexts/ReviewContext";

import { Bubble } from "@/components";
import { formatWithZero } from "@/utils/pareDate";

const Reviews = ({ placeId }: { placeId: number }) => {
  const { time } = useContext(ReviewContext);

  const { queryKey, queryFn } = reviewQueryOptions.all(
    placeId,
    formatWithZero(time)
  );
  const { data: reviews, isLoading } = useQuery({ queryKey, queryFn });

  if (isLoading || !reviews) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {reviews.data.map((review, key) => (
        <Bubble key={key} time={review.time} text={review.message} />
      ))}
    </div>
  );
};
export default Reviews;
