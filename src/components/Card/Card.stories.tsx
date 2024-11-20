import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Card";
import { Figure, Button } from "..";
import { Tag } from "../Tag";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Place: Story = {
  args: {
    image: "",
    title: "홍대",
    discriptions: ["61m", "도로소통 서행"],
    rightChild: <Figure text="여유" />,
  },
};
export const Review: Story = {
  args: {
    image: "",
    title: "홍대",
    discriptions: [<Tag key={1} size="small" text="방문완료" />],
    rightChild: <Button state="active" text="리뷰 작성" />,
  },
};
