import Link from "next/link";
import { Card, Figure, NavigationTop } from "@/components";
import { container, cardContainer } from "./home.css";

const Home = () => {
  return (
    <main className={container}>
      <div className={cardContainer}>
        {[
          {
            id: 1,
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            id: 2,
            title: "가로수길",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="third" text="약간 붐빔" />,
          },
          {
            id: 1,
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            id: 1,
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            id: 3,
            title: "압구정 로데오",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="forth" text="붐빔" />,
          },
          {
            id: 2,
            title: "가로수길",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="third" text="약간 붐빔" />,
          },
          {
            id: 1,
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            id: 3,
            title: "압구정 로데오",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="forth" text="붐빔" />,
          },
        ].map((place, key) => (
          <Link key={key} href={`/place/${place.id}`}>
            <Card
              image=""
              title={place.title}
              discriptions={place.discription}
              rightChild={place.rightChild}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
