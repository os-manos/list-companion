import type { Meta, StoryObj } from "@storybook/react";
import { Settings } from "@/components/icons/Settings";

const meta = {
  component: Settings,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof Settings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
