import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

import { ItemCard } from "@/components/ItemCard";
import { useState } from "react";

const meta = {
  component: ItemCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: { table: { disable: true } },
    onClick: { table: { disable: true } },
    label: { control: "text", description: "Nome do item da lista" },
  },
} satisfies Meta<typeof ItemCard>;

export default meta;

export const Default: StoryObj<Meta> = {
  args: { label: "Café preto" },
  render: ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className="size-96 bg-gray-300 flex items-center p-6">
        <ItemCard
          onClick={() => setIsChecked(!isChecked)}
          checked={isChecked}
          label={label}
        />
      </div>
    );
  },
};
