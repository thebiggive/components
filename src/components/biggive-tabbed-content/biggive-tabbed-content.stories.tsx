import { colorSelector } from "../../color-selector";

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
    textColour: {
      name: 'Default text colour',
      control: colorSelector,
    },
    selectedTextColour: {
      name: 'Selected text colour',
      control: colorSelector,
    },
    navigationHighlightColour: {
      name: 'Navigation highlight colour',
      control: colorSelector,
    },
    selectedNavigationHighlightColour: {
      name: 'Selected navigation highlight colour',
      control: colorSelector,
    },
    buttonBackgroundColour: {
      name: 'Button background colour',
      control: colorSelector,
    },
    buttonIconColour: {
      name: 'Button icon colour',
      control: colorSelector,
    },
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
