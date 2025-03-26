import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon } from "@/components/icons/Close";

const meta = {
  component: CloseIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
