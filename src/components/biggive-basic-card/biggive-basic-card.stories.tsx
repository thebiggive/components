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
    textColour: colorSelector,
    backgroundImageUrl: {
      name: 'Background image URL',
    },
    mainImageUrl: {
      type: 'string',
    },
    cardColour: colorSelector,
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
    buttonAlign: {
      options: ['center', 'left'],
    },
    buttonColourScheme: colorSelector,
    clipBottomLeftCorner: {
      name: 'Clip bottom left corner',
    },
    clipTopRight: {
      name: 'Clip top right corner',
    },
    siteDesign: {
      type: 'select',
      options: ['biggive', 'philco'],
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
                text-colour="${args.textColour}",
                main-title="${args.mainTitle}"
                main-image-url="${args.mainImageUrl}"
                subtitle="${args.subtitle}"
                author="${args.author}"
                date="${args.date}"
                teaser="${args.teaser}"
                button-label="${args.buttonLabel}"
                button-align="${args.buttonAlign}"
                button-url="${args.buttonUrl}"
                button-colour-scheme="${args.buttonColourScheme}"
                clip-bottom-left-corner="${args.clipBottomLeftCorner}"
                clip-top-right-corner="${args.clipTopRightCorner}"
                site-design="${args.siteDesign}"
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
    author: '',
    date: '',
    teaser: 'teaser',
    buttonUrl: '#',
    buttonLabel: 'Click here',
    buttonColourScheme: 'clear-primary',
    clipBottomLeftCorner: true,
    clipTopRightCorner: true,
    buttonAlign: 'center',
  },
};

export const PhilcoNewsLink = {
  args: {
    textColor: 'philco-grey-90',
    spaceBelow: 4,
    icon: false,
    iconColour: 'primary',
    backgroundColour: 'white',
    backgroundImageUrl: '',
    cardColour: 'white',
    textColour: 'philco-grey-90',
    mainTitle: 'Sample main title',
    subtitle: '',
    author: 'Name',
    date: '2024',
    teaser: '',
    buttonUrl: '#',
    buttonLabel: 'Read More',
    buttonColourScheme: 'philco-gray-90',
    clipBottomLeftCorner: false,
    clipTopRightCorner: false,
    siteDesign: 'philco',
    buttonAlign: 'left',
    mainImageUrl: '',
  },
  render: Template,
};
