import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Content',
  argTypes: {
    backgroundColour: colorSelector,
    textColour: colorSelector,
  },
};

const Template = (args: any) => `
            <biggive-sheet
                id="${args.id}"
                background-colour="${args.backgroundColour}"
                text-colour="${args.textColour}"
            >
            </biggive-sheet>
            <div><a href="#test-sheet">Click here to open</a></div>
            `;

export const SheetComponent = {
  render: Template,

  args: {
    id: 'test-sheet',
    backgroundColour: 'primary',
    textColour: 'white',
  },
};
