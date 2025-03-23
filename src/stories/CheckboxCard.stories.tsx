import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

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
    label: { control: "text", description: "Nome do item da lista" },
  },
} satisfies Meta<typeof CheckboxCard>;

export default meta;

export const Default: StoryObj<Meta> = {
  args: { label: "Café preto" },
  render: ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="size-96 bg-gray-300 flex items-center p-6">
        <CheckboxCard
          onClick={() => setIsChecked(!isChecked)}
          checked={isChecked}
          label={label}
        />
      </div>
    );
  },
};
