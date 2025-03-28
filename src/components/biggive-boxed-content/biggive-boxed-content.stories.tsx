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
    horizontalPadding: {
      name: 'Horizontal padding',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    verticalPadding: {
      name: 'Vertical padding',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    backgroundColour: colorSelector,
    shadow: {
      name: 'Shadow',
    },
  },
};

const Template = (args: any) => `
            <biggive-boxed-content
              space-below="${args.spaceBelow}"
              horizontal-padding="${args.horizontalPadding}"
              vertical-padding="${args.verticalPadding}"
              background-colour="${args.backgroundColour}"
              shadow="${args.shadow}"
              >

              <biggive-quote
                attribution="Joe Bloggs"
                quote="Lorem ipsum">
              </biggive-quote>

            </biggive-boxed-content>
            `;

export const BoxedContentComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    horizontalPadding: '3',
    verticalPadding: '4',
    backgroundColour: 'white',
    shadow: true,
  },
};
