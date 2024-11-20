import type { Meta, StoryObj } from "@storybook/react";
import { CardDetail, CardDetailProps } from "./CardDetail";
import { Figure, Button, Bubble } from "..";
import { Tag } from "../Tag";

const meta = {
  title: "Example/CardDetail",
  component: CardDetail,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<CardDetailProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    title: "인구 밀도",
    text: "도보 이동이 자유로워요.",
    rightChild: <Figure text="여유" />,
  },
};

export const Big: Story = {
  args: {
    title: "인구 밀도",
  },
};
