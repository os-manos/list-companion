import type { Meta, StoryObj } from "@storybook/react";
import { Checklist } from "@/components/icons/Checklist";

const meta = {
  component: Checklist,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof Checklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
