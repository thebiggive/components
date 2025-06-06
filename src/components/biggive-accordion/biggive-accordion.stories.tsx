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
    headingColour: colorSelector,
  },
};

const Template = (args: any) => `
                    <biggive-accordion
                      space-below="${args.spaceBelow}"
                      text-colour="${args.textColour}"
                      heading-colour="${args.headingColour}"
                      >
                        <biggive-accordion-entry heading="Heading 1">
                        <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                        <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                        </biggive-accordion-entry>
                        <biggive-accordion-entry heading="Heading 2">
                        <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                        <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                        </biggive-accordion-entry>
                        <biggive-accordion-entry heading="Heading 3">
                        <p>1 Lorem ipsum dolor sit amet, fabulas appetere no sed. Per ea partem pertinacia, modo mollis usu ut. Audire eruditi ex his, ut imperdiet constituam ullamcorper nam. Sed cu etiam iudico qualisque. Dicam alienum ei vel.</p>
                        <p>Quo ex mutat malorum conceptam, at usu dicta perfecto deserunt. An prompta offendit mel, sit regione constituto ei. Ludus possim hendrerit id vis, cu vim sonet dolorem mnesarchum, sit soleat aliquid eu. Ancillae appellantur cum ea. Agam delenit id qui, est summo corpora an.</p>
                        </biggive-accordion-entry>
                    </biggive-accordion>
                    `;

export const AccordionComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    textColour: 'black',
    headingColour: 'primary',
  },
};
