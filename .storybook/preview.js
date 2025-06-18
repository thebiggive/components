import { fn } from '@storybook/test';

import {defineCustomElements} from '../loader';

defineCustomElements();

export const parameters = {
  args: { onClick: fn() },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // This makes the preview a little more cramped but is necessary to avoid `iframe.html` in the static build having outer padding.
  // This is necessary for our current Salesforce Experiences workaround of directly embedding the built Storybook iframe for simple,
  // fixed-input components.
  layout: 'fullscreen',
}
export const tags = ['autodocs'];
