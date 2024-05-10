import { Card, Figure, NavigationTop } from "@/components";
import { container, cardContainer } from "./home.css";

const Home = () => {
  return (
    <main className={container}>
      <NavigationTop />
      <div className={cardContainer}>
        {[
          {
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            title: "가로수길",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="third" text="약간 붐빔" />,
          },
          {
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            title: "압구정 로데오",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="forth" text="붐빔" />,
          },
          {
            title: "가로수길",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="third" text="약간 붐빔" />,
          },
          {
            title: "홍대",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure text="여유" />,
          },
          {
            title: "압구정 로데오",
            discription: ["61m", "도로소통 서행"],
            rightChild: <Figure state="forth" text="붐빔" />,
          },
        ].map((place, key) => (
          <Card
            key={key}
            image=""
            title={place.title}
            discriptions={place.discription}
            rightChild={place.rightChild}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
