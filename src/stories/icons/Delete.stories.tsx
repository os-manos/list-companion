import type { Meta, StoryObj } from "@storybook/react";

import Delete from "@/components/icons/Delete";

const meta = {
  component: Delete,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    height: { control: "text", description: "Altura do ícone" },
    width: { control: "text", description: "Largura do ícone" },
    fill: { control: "color", description: "Cor do ícone" },
  },
} satisfies Meta<typeof Delete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
