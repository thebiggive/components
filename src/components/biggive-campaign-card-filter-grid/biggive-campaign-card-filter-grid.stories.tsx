export default {
  title: 'Components/Campaign Features',
  argTypes: {
    categoryOptions: {
      name: 'Category Options',
    },
    beneficiaryOptions: {
      name: 'Beneficiary Options',
    },
    locationOptions: {
      name: 'Location Options',
    },
    searchText: {
      name: 'Search Text',
    },
    selectedSortByOption: {
      name: 'Selected Sort By Option',
      options: ['Most funds remaining', 'Nearest target', 'Most raised', 'Least Raised', 'Relevance'],
      control: {
        type: 'select',
      },
    },
    selectedFilterCategory: {
      name: 'Selected Filter Category',
      options: ['Health', 'Disaster Relief', 'Cancer'],
      control: {
        type: 'select',
      },
    },
    selectedFilterBeneficiary: {
      name: 'Selected Filter Beneficiary',
      options: ['General Public', 'Animals', 'Veterans'],
      control: {
        type: 'select',
      },
    },
    selectedFilterLocation: {
      name: 'Selected Filter Location',
      options: ['United Kingdom', 'Spain', 'France'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: any) => `
      <biggive-campaign-card-filter-grid
        category-options='${args.categoryOptions}'
        beneficiary-options='${args.beneficiaryOptions}'
        location-options='${args.locationOptions}'
        search-text="${args.searchText}"
        filters-applied="${args.filtersApplied}",
        ${args.selectedSortByOption ? 'selected-sort-by-option=' + args.selectedSortByOption : ''}
        ${args.selectedFilterCategory ? 'selected-filter-category=' + args.selectedFilterCategory : ''}
        ${args.selectedFilterBeneficiary ? 'selected-filter-beneficiary=' + args.selectedFilterBeneficiary : ''}
        ${args.selectedFilterLocation ? 'selected-filter-location=' + args.selectedFilterLocation : ''}
        >
      <biggive-grid slot="campaign-grid" column-count="3">
        <biggive-campaign-card
          campaign-type="Match Funded"
          campaign-title="Oxford Piano Festival Fundraising Campaign for LGBTQ+ community"
          organisation-name="Oxford Philharmonic Orchestra"
          currency-code="GBP"
          primary-figure-label="Total Raised"
          primary-figure-amount="76543"
          secondary-figure-label="Total Raised"
          secondary-figure-amount="76543"
          progress-bar-counter="75">
        </biggive-campaign-card>
        <biggive-campaign-card
          data-filter-categories="[&quot;Healthcare&quot;]"
          data-filter-beneficiaries="[&quot;Children&quot;]"
          campaign-type="Match Funded"
          campaign-title="Oxford Piano Festival Fundraising Campaign for LGBTQ+ community"
          organisation-name="Oxford Philharmonic Orchestra"
          currency-code="GBP"
          primary-figure-label="Total Raised"
          primary-figure-amount="76543"
          secondary-figure-label="Total Raised"
          secondary-figure-amount="76543">
        </biggive-campaign-card>
        <biggive-campaign-card
          data-filter-categories="[&quot;Healthcare&quot;]"
          data-filter-beneficiaries="[&quot;Children&quot;]"
          campaign-type="Match Funded"
          campaign-title="Oxford Piano Festival Fundraising Campaign for LGBTQ+ community"
          organisation-name="Oxford Philharmonic Orchestra"
          currency-code="GBP"
          primary-figure-label="Total Raised"
          primary-figure-amount="76543"
          secondary-figure-label="Total Raised"
          secondary-figure-amount="76543">
        </biggive-campaign-card>
      </biggive-grid>
      </biggive-campaign-card-filter-grid>
      `;

export const CampaignCardFilterGridComponent = {
  render: Template,

  args: {
    categoryOptions: JSON.stringify(['ABC a longer category test', 'DEF something additional']),
    beneficiaryOptions: JSON.stringify(['ABC', 'DEF']),
    locationOptions: JSON.stringify(['ABC', 'DEF']),
    searchText: '',
    selectedSortByOption: null,
    selectedFilterCategory: null,
    selectedFilterBeneficiary: null,
    selectedFilterLocation: null,
  },
};
