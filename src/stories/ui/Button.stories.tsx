import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Parametro responsável por desativar ou não o button",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Opções de tamanho aceitas pelo componente button",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost"],
      description: "Variantes possíveis aceitas pelo componente button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: "default", variant: "default", disabled: false },
  render: ({ size, variant, disabled }) => {
    return (
      <Button size={size} variant={variant} disabled={disabled}>
        Click me!
      </Button>
    );
  },
};
