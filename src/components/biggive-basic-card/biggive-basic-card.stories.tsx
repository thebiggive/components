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
    backgroundImageUrl: {
      name: 'Background image URL',
    },
    cardColour: colorSelector,
    textColour: colorSelector,
    icon: {
      name: 'Icon',
    },
    iconColour: colorSelector,
    mainTitle: {
      name: 'Title',
    },
    subtitle: {
      name: 'Subtitle',
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
    buttonColourScheme: colorSelector,
    clipBottomLeftCorner: {
      name: 'Clip bottom left corner',
    },
    clipTopRight: {
      name: 'Clip top right corner',
    },
  },
};

const Template = (args: any) => `
              <biggive-basic-card
                space-below="${args.spaceBelow}"
                background-colour="${args.backgroundColour}"
                background-image-url="${args.backgroundImageUrl}"
                card-colour="${args.cardColour}"
                text-colour="${args.textColour}"
                icon="${args.icon}"
                icon-colour="${args.iconColour}"
                mainTitle="${args.mainTitle}"
                subtitle="${args.subtitle}"
                teaser="${args.teaser}"
                button-label="${args.buttonLabel}"
                button-url="${args.buttonUrl}"
                button-colour-ccheme="${args.buttonColourScheme}"
                clip-bottom-left-corner="${args.clipBottomLeftCorner}"
                clip-top-right-corner="${args.clipTopRightCorner}"
                >
              </biggive-basic-card>
              `;

export const BasicCardComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    icon: true,
    iconColour: 'primary',
    backgroundColour: 'white',
    backgroundImageUrl: 'https://media.istockphoto.com/vectors/childish-seamless-dotted-pattern-with-colorful-doodle-letters-fun-vector-id1208462693',
    cardColour: 'white',
    textColour: 'white',
    mainTitle: 'Sample main title',
    subtitle: 'Sample subtitle',
    teaser: 'teaser',
    buttonUrl: '#',
    buttonLabel: 'Click here',
    buttonColourScheme: 'clear-primary',
    clipBottomLeftCorner: true,
    clipTopRightCorner: true,
  },
};
