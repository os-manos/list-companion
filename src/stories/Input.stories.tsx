import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/Input";

type InputProps = React.ComponentProps<typeof Input>;
type AllowedInputs = InputProps["type"];

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
      control: "select",
      options: ["email", "password", "text"] as AllowedInputs[],
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: { disabled: false, type: "text", placeholder: "Placeholder" },
};
