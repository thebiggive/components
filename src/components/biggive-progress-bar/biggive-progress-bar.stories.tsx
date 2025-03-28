import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Content',
  argTypes: {
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    colourScheme: colorSelector,
    counter: {
      name: 'Counter',
    },
  },
};

const Template = (args: any) => `
  <biggive-progress-bar
    space-below: "${args.spaceBelow}"
    colour-scheme="${args.colourScheme}"
    counter=${args.counter}
  </biggive-progress-bar>
  `;

export const ProgressBarComponent = {
  render: Template,

  args: {
    spaceBelow: '2',
    colourScheme: 'primary',
    counter: 50,
  },
};
