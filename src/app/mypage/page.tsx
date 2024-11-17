import Link from "next/link";
import { Card, Button, Tag, NavigationLeft } from "@/components";
import { container, cardContainer } from "./mypage.css";

const Mypage = () => {
  return (
    <main className={container}>
      <NavigationLeft />
      <div className={cardContainer}>
        {[
          {
            id: 1,
            title: "홍대",
            imageUrl: "/images/places/홍대.png",
          },
          {
            id: 2,
            title: "가로수길",
            imageUrl: "/images/places/가로수길.png",
          },
          {
            id: 1,
            title: "홍대",
            imageUrl: "/images/places/홍대.png",
          },
        ].map((place, key) => (
          <Link
            key={key}
            href={`/review/${place.id}`}
            style={{ width: "100%" }}
          >
            <Card
              image={place.imageUrl || ""}
              title={place.title}
              discriptions={[<Tag key={0} text="방문예정" />]}
              rightChild={<Button state="active" text="리뷰 작성" />}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Mypage;
