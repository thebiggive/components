import { colorSelector } from "../../color-selector";

export default {
  title: 'Components/Icons',
  argTypes: {
    backgroundColour: colorSelector,
    iconColour: colorSelector,
    icon: {
      name: 'Service',
      control: {
        type: 'select',
        options: ['AlarmClock', 'Heart'],
      },
    },
    url: {
      name: 'Url',
    },
  },
};

const Template = (args: any) => `
          <biggive-misc-icon
            background-colour="${args.backgroundColour}"
            icon-colour="${args.iconColour}"
            icon="${args.icon}"
            url="${args.url}"
          </biggive-misc-icon>
          `;

export const MiscIconComponent = {
  render: Template,

  args: {
    backgroundColour: 'primary',
    iconColour: 'white',
    icon: 'AlarmClock',
    url: '#',
  },
};
