import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/components/ui/button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost"],
    },
  },
  args: {
    onClick: fn(),
    size: "default",
    variant: "default",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = ({ ...props }: React.ComponentProps<typeof Button>) => (
  <Button {...props}>Click me!</Button>
);
