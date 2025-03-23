import type { Meta, StoryObj } from "@storybook/react";

import Settings from "@/components/icons/Settings";

const meta = {
  component: Settings,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "text", description: "Altura do ícone" },
    width: { control: "text", description: "Largura do ícone" },
    fill: { control: "color", description: "Cor do ícone" },
  },
} satisfies Meta<typeof Settings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
