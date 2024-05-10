import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

const meta = {
  title: "Example/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<TagProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: "방문예정",
  },
};
