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
    primaryColour: colorSelector,
    primaryTextColour: colorSelector,
    secondaryColour: colorSelector,
    secondaryTextColour: colorSelector,
    includingGiftAid: {
      name: 'Include Gift Aid',
    },
    totalMatchFunds: {
      name: 'Total match funds',
    },
    totalRaised: {
      name: 'Total raised',
    },
  },
};

const Template = (args: any) => `
            <biggive-totalizer
              space-below="${args.spaceBelow}"
              primary-colour="${args.primaryColour}"
              primary-text-colour="${args.primaryTextColour}"
              secondary-colour="${args.secondaryColour}"
              secondary-text-colour="${args.secondaryTextColour}"
              main-message="${args.mainMessage}">

              <div slot="ticker-items">
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
                <biggive-totalizer-ticker-item figure="£1000" label="total raised"></biggive-totalizer-ticker-item>
              </div>
            </biggive-totalizer>
            `;

export const TotalizerComponent = {
  render: Template,

  args: {
    spaceBelow: 4,
    primaryColour: 'primary',
    primaryTextColour: 'white',
    secondaryColour: 'secondary',
    secondaryTextColour: 'black',
    mainMessage: '£500 raised inc. Gift Aid',
    tickerItems: [
      {
        label: 'Total Raised',
        figure: '£1,000,000',
      },
      {
        label: 'Match Funds Remaining',
        figure: '£500,000',
      },
    ],
  },
};
