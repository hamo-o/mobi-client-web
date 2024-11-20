import { CSSProperties } from "@vanilla-extract/css";
import { buttonRecipe, ButtonVariants } from "./Button.css";
import { typos } from "@/styles/typos.css";
import Link from "next/link";
import svg from "./kakao.svg";
import Image from "next/image";

export type LinkButtonProps = ButtonVariants & {
  text: string;
  href: string;
  style?: CSSProperties;
};

export const LinkButton = (props: LinkButtonProps) => {
  const { state, size, text, href, style } = props;
  return (
    <Link
      href={href}
      className={`${buttonRecipe({ state, size })} ${typos.label2} ${style}`}
      style={{
        width: "100%",
        backgroundColor: "#FFDB00",
        color: "#000000",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",

        flexShrink: 0,
        whiteSpace: "nowrap",

        display: "flex",
        gap: "0.5rem",
      }}
    >
      <Image src={svg} alt="kakao" />
      {text}
    </Link>
  );
};
