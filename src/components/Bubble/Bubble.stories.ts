import type { Meta, StoryObj } from "@storybook/react";
import { Bubble, BubbleProps } from "./Bubble";

const meta = {
  title: "Example/Bubble",
  component: Bubble,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<BubbleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    time: "22:00",
    text: "여기 사람 개많음",
  },
};
