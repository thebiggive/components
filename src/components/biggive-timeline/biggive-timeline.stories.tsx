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

    entryBackgroundColour: colorSelector,

    entryHighlightColour: colorSelector,

    entryDateColour: colorSelector,

    entryTitleColour: colorSelector,

    entryTextColour: colorSelector,
  },
};

const Template = (args: any) => `
                      <biggive-timeline
                        space-below="${args.spaceBelow}"
                        text-colour="${args.textColour}"
                        selected-text-colour="${args.selectedTextColour}"
                        navigation-highlight-colour="${args.navigationHighlightColour}"
                        selected-navigation-highlight-colour="${args.selectedNavigationHighlightColour}"
                        button-background-colour="${args.buttonBackgroundColour}"
                        button-icon-colour="${args.buttonIconColour}"
                        entry-background-colour="${args.entryBackgroundColour}"
                        entry-highlight-colour="${args.entryHighlightColour}"
                        entry-date-colour="${args.entryDateColour}"
                        entry-title-colour="${args.entryTitleColour}"
                        entry-content-colour="${args.entryContentColour}"
                        >
                          <biggive-timeline-entry heading="Heading 1" date="2023-01-01">
                          <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                          <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                          </biggive-timeline-entry>
                          <biggive-timeline-entry heading="Heading 2" date="2023-01-01">
                          <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                          <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                          </biggive-timeline-entry>
                          <biggive-timeline-entry heading="Heading 3" date="2022-01-01">
                          <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                          <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                          </biggive-timeline-entry>
                      </biggive-timeline>
                      `;

export const TimelineComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    textColour: 'black',
    selectedTextColour: 'primary',
    navigationHighlightColour: 'grey-medium',
    selectedNavigationHighlightColour: 'primary',
    buttonBackgroundColour: 'white',
    buttonIconColour: 'primary',
    entryBackgroundColour: 'white',
    entryHighlightColour: 'tertiary',
    entryDateColour: 'black',
    entryTitleColour: 'primary',
    entryContentColour: 'black',
  },
};
