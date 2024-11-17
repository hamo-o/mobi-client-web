import Link from "next/link";

import { Card, Figure, NavigationTop } from "@/components";
import { cardContainer } from "../home.css";

const PlaceList = () => {
  const data = [
    {
      id: 1,
      title: "홍대",
      discription: ["61m", "도로소통 서행"],
      rightChild: <Figure text="여유" />,
      imageUrl: "/images/places/홍대.png",
    },
    {
      id: 3,
      title: "압구정 로데오",
      discription: ["61m", "도로소통 서행"],
      rightChild: <Figure state="forth" text="붐빔" />,
      imageUrl: "/images/places/압구정로데오.png",
    },
    {
      id: 2,
      title: "가로수길",
      discription: ["61m", "도로소통 서행"],
      rightChild: <Figure state="third" text="약간 붐빔" />,
      imageUrl: "/images/places/가로수길.png",
    },
  ];
  return (
    <div className={cardContainer}>
      {/* {places.map((place, key) => (
        <div></div>
      ))} */}
      {data.map((place, key) => (
        <Link key={key} href={`/place/${place.id}`}>
          <Card
            image={place.imageUrl}
            title={place.title}
            discriptions={place.discription}
            rightChild={place.rightChild}
          />
        </Link>
      ))}
    </div>
  );
};

export default PlaceList;
