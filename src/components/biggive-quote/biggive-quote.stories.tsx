import { colorSelector } from '../../color-selector';

export default {
  title: 'Components/Content',
  argTypes: {
    spaceBelow: {
      name: 'Space below',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
      },
    },
    defaultTextColour: colorSelector,
    quote: {
      name: 'Quote',
    },
    attribution: {
      name: 'Quote',
    },
  },
};

const Template = (args: any) => `
              <biggive-quote
                space-below="${args.spaceBelow}"
                default-text-colour="${args.defaultTextColour}"
                quote="${args.quote}"
                attribution="${args.attribution}"
                >

              </biggive-quote>
              `;

export const QuoteComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    defaultTextColour: 'black',
    quote:
      'Lorem ipsum dolor sit amet, has quod diam dolore cu, at solet interesset eam, cu nec affert quando legendos. Ut libris aperiam quo. Et tollit intellegebat mea. Dico nostrud vivendum no his, nam ne sumo illum iudicabit. Cu nec velit argumentum, no quando offendit neglegentur ius.  ',
    attribution: 'this is the attribution',
  },
};
