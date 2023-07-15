import type {Preview} from '@storybook/react';
import {StyleDecorator} from 'shared/config/storyBook/StyleDecorator/StyleDecorator';
import {Story} from '@storybook/blocks';

export const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator(Story),
  ]
};
