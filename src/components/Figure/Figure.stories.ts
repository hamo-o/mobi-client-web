import type { Meta, StoryObj } from "@storybook/react";
import { Figure, FigureProps } from "./Figure";

const meta = {
  title: "Example/Figure",
  component: Figure,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<FigureProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    state: "first",
    text: "여유",
  },
};
