import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/icons/Alert";

const meta = {
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
