import type { Meta, StoryObj } from "@storybook/react";

import { Trash2 } from "lucide-react";

const meta = {
  component: Trash2,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "number", description: "Tamanho em pixels do ícone" },
    color: { control: "color", description: "Cor referente a borda do ícone." },
  },
  args: { size: 36, color: "#FFFF" },
} satisfies Meta<typeof Trash2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
