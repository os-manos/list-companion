import type { Meta, StoryObj } from "@storybook/react";

import Alert from "@/components/icons/Alert";

const meta = {
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "text", description: "Altura do ícone" },
    width: { control: "text", description: "Largura do ícone" },
    fill: { control: "color", description: "Cor do ícone" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
