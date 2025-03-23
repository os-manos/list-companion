import type { Meta, StoryObj } from "@storybook/react";

import Close from "@/components/icons/Close";

const meta = {
  component: Close,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "text", description: "Altura do ícone" },
    width: { control: "text", description: "Largura do ícone" },
    fill: { control: "color", description: "Cor do ícone" },
  },
} satisfies Meta<typeof Close>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
