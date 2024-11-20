import Link from "next/link";
import { Card, Button, Tag } from "@/components";
import { PlaceTime } from "@/types/dto";

const VisitItem = ({
  placeId,
  placeImageUrl,
  placeName,
  status,
}: PlaceTime) => {
  const isVisited = status === "방문완료";

  return (
    <Link href={`/review/${placeId}`} style={{ width: "100%" }}>
      <Card
        image={placeImageUrl || ""}
        title={placeName}
        discriptions={[
          <Tag
            key={0}
            {...(isVisited && { state: "primary" })}
            text={status}
          />,
        ]}
        {...(isVisited && {
          rightChild: <Button state="active" text="리뷰 작성" />,
        })}
      />
    </Link>
  );
};

export default VisitItem;
