export default {
  title: 'Components/Content',
  argTypes: {
    backgroundColour: {
      name: 'Background colour',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'white', 'black'],
      },
    },
    textColour: {
      name: 'Text colour',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'white', 'black'],
      },
    },
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
