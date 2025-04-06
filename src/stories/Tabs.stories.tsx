import { Tabs } from "@/components/Tabs";
import { TabsConfig } from "@/lib/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    config: {
      control: "object",
      description: "Configuração dos tabs",
    },
    defaultValue: {
      control: { type: "select" },
      options: ["tab1", "tab2"],
      description:
        "Qual tab deve ser exibida por padrão ao renderizar o componente",
    },
    currentPageUrl: {
      control: "text",
      description:
        "URL da página atual, usada para gerar uma query params com o nome da tab",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

type TabsKeyType = "tab1" | "tab2";

const Tab1 = () => (
  <div className="text-black">
    <h1 className="font-bold">Tab 1</h1>
    <p>This is the content of Tab 1</p>
  </div>
);

const Tab2 = () => (
  <div className="text-black">
    <h1 className="font-bold">Tab 2</h1>
    <p>This is the content of Tab 2</p>
  </div>
);

const config: Record<TabsKeyType, TabsConfig> = {
  tab1: {
    name: "Tab 1",
    tab: <Tab1 />,
  },
  tab2: {
    name: "Tab 2",
    tab: <Tab2 />,
  },
};

export const WithPathParams: Story = {
  args: {
    config: config,
    defaultValue: "tab1",
    currentPageUrl: "/tabs",
  },
};

export const WithoutPathParams: Story = {
  args: {
    config: config,
    defaultValue: "tab1",
  },
};
