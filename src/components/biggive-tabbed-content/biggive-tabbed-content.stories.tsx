import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Layout',
  argTypes: {
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    textColour: colorSelector,
    selectedTextColour: colorSelector,
    navigationHighlightColour: colorSelector,
    selectedNavigationHighlightColour: colorSelector,
    buttonBackgroundColour: colorSelector,
    buttonIconColour: colorSelector,
  },
};

const Template = (args: any) => `
                <biggive-tabbed-content
                  space-below="${args.spaceBelow}"
                  text-colour="${args.textColour}"
                  selected-text-colour="${args.selectedTextColour}"
                  navigation-highlight-colour="${args.navigationHighlightColour}"
                  selected-navigation-highlight-colour="${args.selectedNavigationHighlightColour}"
                  button-background-colour="${args.buttonBackgroundColour}"
                  button-icon-colour="${args.buttonIconColour}"
                  >
                  <biggive-tab tab-title="this is my title">
                    This is the content for the first item
                  </biggive-tab>
                  <biggive-tab tab-title="this is my second title">
                    This is the content for the second item
                  </biggive-tab>
                </biggive-tabbed-content>
                `;

export const TabbedContentComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    textColour: 'black',
    selectedTextColour: 'primary',
    navigationHighlightColour: 'grey-medium',
    selectedNavigationHighlightColour: 'primary',
    buttonBackgroundColour: 'white',
    buttonIconColour: 'primary',
  },
};
