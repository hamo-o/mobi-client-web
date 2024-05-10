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
          },
          {
            id: 2,
            title: "가로수길",
          },
          {
            id: 1,
            title: "홍대",
          },
          {
            id: 1,
            title: "홍대",
          },
          {
            id: 3,
            title: "압구정 로데오",
          },
          {
            id: 2,
            title: "가로수길",
          },
          {
            id: 1,
            title: "홍대",
          },
          {
            id: 3,
            title: "압구정 로데오",
          },
        ].map((place, key) => (
          <Card
            key={key}
            image=""
            title={place.title}
            discriptions={[<Tag key={0} text="방문예정" />]}
            rightChild={<Button state="active" text="리뷰 작성" />}
          />
        ))}
      </div>
    </main>
  );
};

export default Mypage;
