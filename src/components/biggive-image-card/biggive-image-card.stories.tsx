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
    backgroundColour: {
      name: 'Background colour',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'brand-1', 'brand-2', 'brand-3', 'brand-4', 'brand-5', 'brand-6', 'white', 'black', 'transparent'],
      },
    },
    teaserColour: {
      name: 'Text colour',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'brand-1', 'brand-2', 'brand-3', 'brand-4', 'brand-5', 'brand-6', 'white', 'black', 'transparent'],
      },
    },
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
        options: [
          'primary',
          'secondary',
          'tertiary',
          'brand-1',
          'brand-2',
          'brand-3',
          'brand-4',
          'brand-5',
          'brand-6',
          'white',
          'black',
          'clear-primary',
          'clear-secondary',
          'clear-tertiary',
          'clear-brand-1',
          'clear-brand-2',
          'clear-brand-3',
          'clear-brand-4',
          'clear-brand-5',
          'clear-brand-6',
          'clear-white',
          'clear-black',
        ],
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

export const ImageCardComponent = Template.bind({});
ImageCardComponent.args = {
  spaceBelow: 4,
  backgroundColour: 'white',
  teaser: 'teaser',
  buttonUrl: '#',
  buttonLabel: 'Click here',
  buttonColourScheme: 'clear-primary',
  clipBottomLeftCorner: true,
  clipTopRightCorner: true,
};
