import type { Meta } from "@storybook/react";

import { CheckboxCard } from "@/components/CheckboxCard";

const meta = {
  title: "Components/Checkbox Card",
  component: CheckboxCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: { control: "boolean" },
    name: { control: "text" },
  },
  args: {
    checked: false,
    name: "Café preto",
  },
} satisfies Meta<typeof CheckboxCard>;

export default meta;

export const Default = ({
  ...props
}: React.ComponentProps<typeof CheckboxCard>) => (
  <div className="size-96 bg-gray-300 flex items-center p-6">
    <CheckboxCard {...props} />
  </div>
);
