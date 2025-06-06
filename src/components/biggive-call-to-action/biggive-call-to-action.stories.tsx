import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Content',
  argTypes: {
    spaceAbove: {
      name: 'Space above',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    defaultTextColour: colorSelector,
    slugSize: {
      name: 'Slug size',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    slugColour: colorSelector,
    slug: {
      name: 'Slug',
    },
    mainTitleSize: {
      name: 'Main title size',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    mainTitleColour: colorSelector,
    mainTitle: {
      name: 'Main title',
    },
    subtitleSize: {
      name: 'Subtitle size',
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
    subtitleColour: colorSelector,
    subtitle: {
      name: 'Subtitle',
    },
    teaserColour: colorSelector,
    teaser: {
      name: 'Teaser',
    },
    primaryButtonUrl: {
      name: 'Primary button url',
    },
    primaryButtonLabel: {
      name: 'Primary button label',
    },
    primaryButtonColourScheme: colorSelector,
    secondaryButtonUrl: {
      name: 'Secondary button url',
    },
    secondaryButtonLabel: {
      name: 'Secondary button label',
    },
    secondaryButtonColourScheme: colorSelector,
  },
};

const Template = (args: any) => `
      <biggive-call-to-action
        space-anove=${args.spaceAbove}
        space-below=${args.spaceBelow}
        default-text-colour="${args.defaultTextColour}"
        slug-size="${args.slugSize}"
        slug-colour="${args.slugColour}"
        slug="${args.slug}"
        main-title-size="${args.mainTitleSize}"
        main-title-colour="${args.mainTitleColour}"
        main-title="${args.mainTitle}"
        subtitle-size="${args.subtitleSize}"
        subtitle-colour="${args.subtitleColour}"
        subtitle="${args.subtitle}"
        teaser-colour="${args.teaserColour}"
        teaser="${args.teaser}"
        primary-button-url="${args.primaryButtonUrl}"
        primary-button-label="${args.primaryButtonLabel}"
        primary-button-colour-scheme="${args.primaryButtonColourScheme}"
        secondary-button-url="${args.secondaryButtonUrl}"
        secondary-button-label="${args.secondaryButtonLabel}"
        secondary-button-colour-scheme="${args.secondaryButtonColourScheme}"
      </biggive-call-to-action>
      `;

export const CallToActionComponent = {
  render: Template,

  args: {
    spaceAbove: 0,
    spaceBelow: 0,
    defaultTextColour: 'primary',
    slugSize: 4,
    slugColour: '',
    slug: 'Test Slug',
    mainTitleSize: 2,
    mainTitleColour: '',
    mainTitle: 'Test title',
    subtitleSize: 4,
    subtitleColour: '',
    subtitle: 'Test subtitle',
    teaserColour: '',
    teaser: 'Test teaser',
    primaryButtonUrl: '#',
    primaryButtonLabel: 'Click me',
    primaryButtonColourScheme: 'primary',
    secondaryButtonUrl: '#',
    secondaryButtonLabel: 'Click me',
    secondaryButtonColourScheme: 'clear-primary',
  },
};
