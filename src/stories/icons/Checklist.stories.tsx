import type { Meta, StoryObj } from "@storybook/react";
import { ChecklistIcon } from "@/components/icons/Checklist";

const meta = {
  component: ChecklistIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Class name que irá receber as props de estilo do ícone",
    },
  },
} satisfies Meta<typeof ChecklistIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
