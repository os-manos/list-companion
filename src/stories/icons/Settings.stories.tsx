import type { Meta, StoryObj } from "@storybook/react";
import { SettingsIcon } from "@/components/icons/Settings";

const meta = {
  component: SettingsIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof SettingsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
