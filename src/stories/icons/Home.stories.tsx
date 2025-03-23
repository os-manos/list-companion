import type { Meta, StoryObj } from "@storybook/react";

import Home from "@/components/icons/Home";

const meta = {
  component: Home,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "text", description: "Altura do ícone" },
    width: { control: "text", description: "Largura do ícone" },
    fill: { control: "color", description: "Cor do ícone" },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
