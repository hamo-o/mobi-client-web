"use client";

import placeQueryOptions from "@/apis/place/query";
import { Button } from "@/components";
import { useBookmark } from "@/hooks/mutations/useBookmark";
import { PlaceDetail } from "@/types/dto";
import { useQuery } from "@tanstack/react-query";

const BookmarkButton = ({
  placeId,
}: Pick<PlaceDetail, "placeId" | "isBookmarked">) => {
  const { queryKey, queryFn } = placeQueryOptions.detail(placeId);
  const { data: place } = useQuery({ queryKey, queryFn });

  const { mutation } = useBookmark(placeId, {
    bookMarkStatus: !place?.data.isBookmarked,
  });

  const handleClickBookmark = () => {
    mutation.mutate();
  };

  return (
    <Button
      state="default"
      text={place?.data.isBookmarked ? "찜 해제" : "찜하기"}
      onClick={handleClickBookmark}
    />
  );
};
export default BookmarkButton;
