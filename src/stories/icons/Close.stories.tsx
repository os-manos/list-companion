import type { Meta, StoryObj } from "@storybook/react";
import { Close } from "@/components/icons/Close";

const meta = {
  component: Close,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof Close>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
