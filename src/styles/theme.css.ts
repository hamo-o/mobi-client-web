import { createTheme, globalStyle } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    gray_03: "#b3b3b3",
    gray_01: "#efefef",
    gray_06: "#313131",
    white: "#ffffff",
    green: "#33c37e",
    green_20: "#33c37e33",
    red_20: "#e8424c33",
    red: "#e8424c",
    orange_20: "#e8884233",
    orange: "#e88842",
    yellow: "#e8ba42",
    yellow_20: "#e8ba4233",
    black: "#212121",
    gray_04: "#656565",
    gray_05: "#404040",
    gray_02: "#d4d4d4",
  },
  fonts: {
    title: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.875rem",
      fontWeight: "700",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    subtitle: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    body: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "700",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    detail: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "140%",
      letterSpacing: "-0.32px",
    },
    label1: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.25rem",
      fontWeight: "400",
      lineHeight: "160%",
      letterSpacing: "-0.4px",
    },
    label2: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1.125rem",
      fontWeight: "500",
      lineHeight: "110%",
      letterSpacing: "-0.4px",
    },
    label3: {
      fontFamily:
        "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "110%",
      letterSpacing: "-0.4px",
    },
  },
});

globalStyle(":root", {
  fontFamily:
    "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
});

globalStyle("body", {
  background: vars.color.black,
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("button", {
  background: "inherit",
  border: "none",
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
  outline: "none",
});

globalStyle("a:visited", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("input", {
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
});

globalStyle("input:focus", {
  outline: "none",
});
