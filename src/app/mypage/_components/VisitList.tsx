import { cardContainer } from "../mypage.css";
import { PlaceTime } from "@/types/dto";
import { typos } from "@/styles/typos.css";
import { colors } from "@/styles/colors";
import VisitItem from "./VisitItem";

const VisitList = ({ places }: { places: PlaceTime[] }) => {
  console.log(places);
  if (!places.length)
    return (
      <div className={typos.body} style={{ color: colors.gray_02 }}>
        방문한 장소가 아직 없어요.
      </div>
    );

  return (
    <div className={cardContainer}>
      {places.map((place, key) => (
        <VisitItem key={key} {...place} />
      ))}
    </div>
  );
};
export default VisitList;
