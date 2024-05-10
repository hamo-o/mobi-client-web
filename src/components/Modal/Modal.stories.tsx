import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";
import { Input, Button } from "..";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "방문 기록",
    text: "도보 이동이 자유로워요.",
  },
};
