import { useState } from "react";
import { Tab } from "./Tab";
import { container } from "./NavigationLeft.css";

export type NavigationToptProps = {};

export const NavigationLeft = (props: NavigationToptProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={container}>
      {["방문한 장소", "찜한 장소", "내정보"].map((text, key) => (
        <Tab
          key={key}
          onClick={() => setSelected(key)}
          selected={selected === key}
          text={text}
        />
      ))}
    </div>
  );
};
