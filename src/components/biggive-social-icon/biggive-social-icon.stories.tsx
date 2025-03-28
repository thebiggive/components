import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Icons',
  argTypes: {
    backgroundColour: colorSelector,
    iconColour: colorSelector,
    service: {
      name: 'Service',
      control: {
        type: 'select',
        options: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'Web', 'Whatsapp', 'YouTube'],
      },
    },
    url: {
      name: 'Url',
    },
  },
};

const Template = (args: any) => `
          <biggive-social-icon
            background-colour="${args.backgroundColour}"
            icon-colour="${args.iconColour}"
            service="${args.service}"
            url="${args.url}"
          </biggive-social-icon>
          `;

export const SocialIconComponent = {
  render: Template,

  args: {
    backgroundColour: 'primary',
    iconColour: 'white',
    service: 'Twitter',
    url: '#',
  },
};
