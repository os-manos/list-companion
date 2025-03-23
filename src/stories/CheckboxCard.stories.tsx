import type { Meta } from "@storybook/react";

import { CheckboxCard } from "@/components/CheckboxCard";
import { useState } from "react";

const meta = {
  component: CheckboxCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: { table: { disable: true } },
    onClick: { table: { disable: true } },
    name: { control: "text" },
  },
  args: {
    name: "Café preto",
  },
} satisfies Meta<typeof CheckboxCard>;

export default meta;

export const Default = ({
  ...props
}: React.ComponentProps<typeof CheckboxCard>) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="size-96 bg-gray-300 flex items-center p-6">
      <CheckboxCard
        onClick={() => setIsChecked(!isChecked)}
        checked={isChecked}
        name={props.name}
      />
    </div>
  );
};
