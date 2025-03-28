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
    videoUrl: {
      name: 'Video URL',
    },
    slug: {
      name: 'Slug',
    },
    slugColour: colorSelector,
    mainTitle: {
      name: 'Main title',
    },
    mainTitleColour: colorSelector,
    teaser: {
      name: 'Teaser',
    },
    teaserColour: colorSelector,
    buttonUrl: {
      name: 'Button url',
    },
    buttonLabel: {
      name: 'Button label',
    },
    primaryButtonColourScheme: colorSelector,
  },
};

const Template = (args: any) => `
          <biggive-video-feature
            space-above="${args.spaceAbove}"
            space-below="${args.spaceBelow}"
            default-text-colour="${args.defaultTextColour}"
            video-url="${args.videoUrl}"
            slug="${args.slug}"
            slug-colour="${args.slugColour}"
            main-title="${args.mainTitle}"
            main-title-colour="${args.mainTitleColour}"
            teaser="${args.teaser}"
            teaser-colour="${args.teaserColour}"
            button-url="${args.buttonUrl}"
            button-label="${args.buttonLabel}"
            button-colour-scheme="${args.buttonColourScheme}">
          </biggive-video-feature>
          `;

export const VideoFeatureComponent = {
  render: Template,

  args: {
    spaceAbove: 0,
    spaceBelow: 4,
    defaultTextColour: 'primary',
    videoUrl: 'https://www.youtube.com/embed/Ru4vGXMavf4',
    slug: 'Test slug',
    slugColour: null,
    mainTitle: 'Test title',
    mainTitleColour: null,
    teaser: 'This is the teaser content for the video',
    teaserColour: null,
    buttonUrl: '#',
    buttonLabel: 'Find out more',
    buttonColourScheme: 'primary',
  },
};
