import Link from "next/link";
import { Card, Button, Tag, NavigationLeft } from "@/components";
import { cardContainer } from "../mypage.css";
import { UserPlace } from "@/types/dto";

const VisitList = ({ places }: { places: UserPlace[] }) => {
  return (
    <div className={cardContainer}>
      {places.map((place, key) => (
        <Link
          key={key}
          href={`/review/${place.placeId}`}
          style={{ width: "100%" }}
        >
          <Card
            image={place.imageUrl || ""}
            title={place.placeName}
            discriptions={[<Tag key={0} text="방문예정" />]}
            rightChild={<Button state="active" text="리뷰 작성" />}
          />
        </Link>
      ))}
    </div>
  );
};
export default VisitList;
