import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Buttons',
  argTypes: {
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    backgroundColour: colorSelector,
    imageUrl: {
      name: 'Image URL',
    },
    imageStyle: {
      name: 'Image style',
      options: ['cover', 'contain'],
    },
    text: {
      name: 'Text',
    },
    textColour: colorSelector,
    url: {
      name: 'Url',
    },
    openInNewTab: {
      name: 'Open in new tab',
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'x-large', 'xx-large'],
      },
    },
    arrow: {
      name: 'Arrow',
      options: [true, false],
    },
    arrowColour: colorSelector,
    circle: {
      name: 'Circle',
      options: [true, false],
    },
    shadow: {
      name: 'Shadow',
      options: [true, false],
    },
    centered: {
      name: 'Centered',
      options: [true, false],
    },
    rounded: {
      name: 'Rounded',
      options: [true, false],
    },
  },
};

const Template = (args: any) => `
      <biggive-image-button
        space-below="${args.spaceBelow}"
        background-colour="${args.backgroundColour}"
        background-padding="${args.backgroundPadding}"
        text=${args.text}
        textColour=${args.textColour}
        image-url="${args.imageUrl}"
        image-style="${args.imageStyle}"
        url="${args.url}"
        open-in-new-tab="${args.openInNewTab}"
        size=${args.size}
        arrow=${args.arrow}
        arrowColour=${args.arrowColour}
        circle=${args.circle}
        shadow=${args.shadow}
        centered=${args.centered}
        rounded=${args.rounded}
      </biggive-image-button>
      `;

export const ImageButtonComponent = {
  render: Template,

  args: {
    spaceBelow: 0,
    backgroundColour: 'white',
    backgroundPadding: 3,
    text: 'This is the button text',
    textColour: 'black',
    imageUrl: '',
    imageStyle: 'cover',
    url: 'http://www.google.com',
    openInNewTab: false,
    size: 'medium',
    arrow: true,
    arrowColour: 'black',
    circle: false,
    shadow: false,
    centered: false,
    rounded: false,
  },
};
