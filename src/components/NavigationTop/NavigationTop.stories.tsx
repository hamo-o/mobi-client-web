import type { Meta, StoryObj } from "@storybook/react";
import { NavigationTop, NavigationToptProps } from "./NavigationTop";

const meta = {
  title: "Example/Navigation",
  component: NavigationTop,
  decorators: [
    (Story) => (
      <div style={{ width: 1000 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<NavigationToptProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
