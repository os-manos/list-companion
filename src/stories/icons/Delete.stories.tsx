import type { Meta, StoryObj } from "@storybook/react";
import { Delete } from "@/components/icons/Delete";

const meta = {
  component: Delete,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof Delete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
