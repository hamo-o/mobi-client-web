"use client";

import { Button } from "@/components";
import { useBookmark } from "@/hooks/mutations/useBookmark";
import { PlaceDetail } from "@/types/dto";

const BookmarkButton = ({
  placeId,
  isBookmarked,
}: Pick<PlaceDetail, "placeId" | "isBookmarked">) => {
  const { mutation } = useBookmark(placeId, {
    bookMarkStatus: true,
  });

  const handleClickBookmark = () => {
    mutation.mutate();
  };

  return isBookmarked ? (
    <Button state="default" text="찜 해제" />
  ) : (
    <Button state="default" text="찜하기" onClick={handleClickBookmark} />
  );
};
export default BookmarkButton;
