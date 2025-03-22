import type { Meta, StoryObj } from "@storybook/react";

import ErrorIcon from "../components/Icons/ErrorIcon";

const meta = {
  title: "Icons/Error Icon",
  component: ErrorIcon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ErrorIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
