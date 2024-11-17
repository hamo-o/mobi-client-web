import { vars } from "@/styles/theme.css";
import { typos } from "@/styles/typos.css";
import {
  container,
  cardContainer,
  imageContainer,
  twoColumnContainer,
} from "../place.css";
import {
  Bubble,
  Button,
  CardDetail,
  Figure,
  Tag,
  Chart,
  Map,
} from "@/components";
import Link from "next/link";
import Image from "next/image";

const Place = ({ params: { id } }: { params: { id: string } }) => {
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

  const place = data.find((place) => place.id === Number(id));
  if (!place) return null;

  return (
    <main className={container}>
      <div>
        <div className={imageContainer}>
          <Image
            src={place.imageUrl}
            alt="홍대"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 160,
            padding: "40px 0",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span className={typos.title} style={{ color: vars.color.white }}>
              {place.title}
            </span>
            <Tag text="핫플" />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/place/create">
              <Button state="active" text="방문하기" />
            </Link>
            <Button state="default" text="저장하기" />
          </div>
        </div>
      </div>
      <div className={cardContainer}>
        <div className={twoColumnContainer}>
          <CardDetail
            title="인구 밀도"
            text="도보 이동이 자유로워요."
            rightChild={place.rightChild}
          />
          <CardDetail
            title="도로 소통"
            text="해당 장소로 이동 · 진입 시 시간이 다소 소요될 수 있어요."
            rightChild={<Figure state="second" text="보통" />}
          />
        </div>
        <CardDetail
          title="실시간 인구 추이"
          content={
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                  background: vars.color.gray_06,
                }}
              >
                <Chart />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <Bubble time="22:00" text="여기 사람 개많음" />
                <Bubble
                  time="22:30"
                  text="클럽거리 밤 10시 이후에 가지 마세요"
                />
                <Bubble time="22:00" text="너무 더러워요" />
              </div>
            </div>
          }
        />
        <CardDetail
          title="위치 정보"
          text="서울 마포구 와우산로"
          content={
            <div
              style={{
                width: "100%",
                height: 400,
                borderRadius: "0.5rem",
                background: vars.color.gray_05,
              }}
            >
              <Map />
            </div>
          }
        />
      </div>
    </main>
  );
};

export default Place;
