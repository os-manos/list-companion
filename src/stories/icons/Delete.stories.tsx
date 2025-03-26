import type { Meta, StoryObj } from "@storybook/react";
import { DeleteIcon } from "@/components/icons/Delete";

const meta = {
  component: DeleteIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof DeleteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
