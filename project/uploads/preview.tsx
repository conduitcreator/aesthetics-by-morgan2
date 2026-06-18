import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/globals.css';
import { ThemeProvider } from '../src/components/ThemeProvider';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ivory',
      values: [
        { name: 'ivory', value: '#F7F3EE' },
        { name: 'linen', value: '#EFE6DC' },
        { name: 'espresso', value: '#2E2723' },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '2.5rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
