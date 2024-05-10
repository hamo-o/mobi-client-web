import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    state: 'active',
    text: 'Button',
  },
};
