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
    fundingOptions: {
      name: 'Funding Options',
    },
    searchText: {
      name: 'Search Text',
    },
    selectedSortByOption: {
      name: 'Selected Sort By Option',
      options: ['Match funds remaining', 'Most raised', 'Relevance'],
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
    selectedFilterFunding: {
      name: 'Selected Filter Funding',
      options: ['Match funded'],
      control: {
        type: 'select',
      },
    },
    filtersApplied: {
      name: 'Filters applied',
      options: [true, false],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = args => `
      <biggive-campaign-card-filter-grid
        category-options="${args.categoryOptions}"
        beneficiary-options="${args.beneficiaryOptions}"
        location-options="${args.locationOptions}"
        funding-options="${args.fundingOptions}"
        search-text="${args.searchText}"
        filters-applied="${args.filtersApplied}",
        selected-sort-by-option="${args.selectedSortByOption}"
        selected-filter-categeory="${args.selectedFilterCategory}"
        selected-filter-beneficiary="${args.selectedFilterBeneficiary}"
        selected-filter-location="${args.selectedFilterLocation}"
        selected-filter-funding="${args.selectedFilterFunding}"
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

document.addEventListener('doSearchAndFilterUpdate', $event => console.log($event.detail));

export const CampaignCardFilterGridComponent = Template.bind({});
CampaignCardFilterGridComponent.args = {
  categoryOptions: ['ABC', 'DEF'],
  beneficiaryOptions: ['ABC', 'DEF'],
  locationOptions: ['ABC', 'DEF'],
  fundingOptions: ['ABC', 'DEF'],
  searchText: '',
  selectedSortByOption: 'Sort by', // use the placeholder as the defaulted option
  selectedFilterCategory: 'Category', // use the placeholder as the defaulted option
  selectedFilterBeneficiary: 'Beneficiary', // use the placeholder as the defaulted option
  selectedFilterLocation: 'Location', // use the placeholder as the defaulted option
  selectedFilterFunding: 'Funding', // use the placeholder as the defaulted option
  filtersApplied: false,
};
