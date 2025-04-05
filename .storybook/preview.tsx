import * as NextLink from "next/link";
import type { Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "@/app/globals.css";

const LinkMock = ({ href, children, ...props }) => (
  <a
    {...props}
    href={href}
    onClick={e => {
      e.preventDefault();
      action('Next Link')(href); 
    }}
  >
    {children}
  </a>
);

Object.defineProperty(NextLink, 'default', {
  configurable: true,
  value: LinkMock,
});

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;

