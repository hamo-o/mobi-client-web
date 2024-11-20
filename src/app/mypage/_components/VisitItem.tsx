import Link from "next/link";
import { Card, Button, Tag } from "@/components";
import { PlaceTime } from "@/types/dto";

const VisitItem = ({
  placeId,
  placeImageUrl,
  placeName,
  visitTime,
  status,
}: PlaceTime) => {
  const isVisited = status === "방문완료";

  return (
    <Link href={`/place/${placeId}`} style={{ width: "100%" }}>
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
          rightChild: (
            <Link
              href={{
                pathname: `/review/${placeId}`,
                query: { placeName, visitTime },
              }}
            >
              <Button state="active" size="small" text="리뷰 작성" />
            </Link>
          ),
        })}
      />
    </Link>
  );
};

export default VisitItem;
