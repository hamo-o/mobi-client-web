import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    label: "방문날짜*",
    placeholder: "검색어를 입력하세요",
  },
};

export const Active: Story = {
  args: {
    state: "active",
    label: "방문날짜*",
    placeholder: "검색어를 입력하세요",
  },
};
