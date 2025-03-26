import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "@/components/ui/input";

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Parametro responsável pro ativar ou não o o input",
    },
    type: {
      control: "text",
      description: "Tipo do input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder do input",
    },
    className: {
      control: "text",
      description:
        "Recebe classes do tailwind para permitir personalizar melhor o input",
      table: {
        disable: true,
      },
    },
    onClick: {
      description: "Recebe uma função que será passada para o input",
      table: {
        disable: true,
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: { disabled: false, type: "email", placeholder: "Placeholder" },
  render: ({ disabled, type, placeholder }) => {
    return <Input disabled={disabled} type={type} placeholder={placeholder} />;
  },
};
