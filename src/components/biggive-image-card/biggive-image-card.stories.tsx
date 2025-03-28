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
    backgroundColour: colorSelector,
    teaserColour: colorSelector,
    teaser: {
      name: 'Teaser',
    },
    buttonUrl: {
      name: 'Button URL',
    },
    buttonLabel: {
      name: 'Button label',
    },
    buttonColourScheme: {
      name: 'Button colour scheme',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'white', 'black', 'clear-primary', 'clear-secondary', 'clear-tertiary', 'clear-white', 'clear-black'],
      },
    },
    clipBottomLeftCorner: {
      name: 'Clip bottom left corner',
    },
    clipTopRight: {
      name: 'Clip top right corner',
    },
  },
};

const Template = (args: any) => `
              <biggive-image-card
                space-below="${args.spaceBelow}"
                background-colour="${args.backgroundColour}"
                teaser="${args.teaser}"
                button-label="${args.buttonLabel}"
                button-url="${args.buttonUrl}"
                button-colour-ccheme="${args.buttonColourScheme}"
                clip-bottom-left-corner="${args.clipBottomLeftCorner}"
                clip-top-right-corner="${args.clipTopRightCorner}"
                >
              </biggive-image-card>
              `;

export const ImageCardComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    backgroundColour: 'white',
    teaser: 'teaser',
    buttonUrl: '#',
    buttonLabel: 'Click here',
    buttonColourScheme: 'clear-primary',
    clipBottomLeftCorner: true,
    clipTopRightCorner: true,
  },
};
