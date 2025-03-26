import type { Meta, StoryObj } from "@storybook/react";
import { AlertIcon } from "@/components/icons/Alert";

const meta = {
  component: AlertIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof AlertIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
