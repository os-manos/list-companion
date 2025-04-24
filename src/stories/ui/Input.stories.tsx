import type { Meta, StoryObj } from "@storybook/react";
import { InputRoot } from "@/components/ui/input";

const meta = {
  component: InputRoot,
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
      description: "Recebe classes do tailwind para permitir personalizar melhor o input",
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
} satisfies Meta<typeof InputRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: { disabled: false, type: "email", placeholder: "Placeholder" },
};
