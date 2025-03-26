import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "@/components/icons/Home";

const meta = {
  component: HomeIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof HomeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
