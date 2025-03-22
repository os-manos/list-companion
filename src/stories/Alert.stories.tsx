import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../components/Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: { title: { control: "text" } },
  args: { title: "O item foi removido da lista" },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
