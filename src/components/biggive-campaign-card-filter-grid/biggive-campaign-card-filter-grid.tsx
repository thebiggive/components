import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { faFilterSlash, faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';

@Component({
  tag: 'biggive-campaign-card-filter-grid',
  styleUrl: 'biggive-campaign-card-filter-grid.scss',
  shadow: true,
})
export class BiggiveCampaignCardFilterGrid {
  @Element() el;

  /**
   * This event `doSearchAndFilterUpdate` event is emitted and propogates to the parent
   * component which handles it
   */
  @Event({
    eventName: 'doSearchAndFilterUpdate',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  doSearchAndFilterUpdate: EventEmitter<{
    searchText: string;
    sortBy: string;
    filterCategory: string;
    filterBeneficiary: string;
    filterLocation: string;
    filterFunding: string;
  }>;

  /**
   * This event `doSearchAndFilterUpdate` event is emitted and propogates to the parent
   * component which handles it
   */
  @Event({
    eventName: 'doClearFilters',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  doClearFilters: EventEmitter<boolean>;

  sortBy: string = null;
  filterCategory: string = null;
  filterBeneficiary: string = null;
  filterLocation: string = null;
  filterFunding: string = null;

  sortByPlaceholderText = 'Sort by';

  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;

  /**
   * Intro
   */
  @Prop() intro: string = 'Find a charity or project';

  /**
   * Optional search text prop. Useful for pre-populating the search field
   * when the page is loaded with a search term already existing in the URL.
   * This can happen when sharing links, or if a donor goes to a campaign page
   * after searching, and then returns to the search results. In such a case,
   * the search box text will clear, unless we use this prop to populate it on
   * rendering. DON-652.
   */
  @Prop() searchText: string = null;

  /**
   * Defines the text displayed as the placeholder in the input field
   * before the user types anything
   */
  @Prop() placeholderText: string = 'Search';

  /**
   * Defines the text on the search button
   */
  @Prop() buttonText: string = 'Search';

  /**
   * JSON array of category key/values
   */
  @Prop() categoryOptions: string[] = [];

  /**
   * JSON array of beneficiary key/values
   */
  @Prop() beneficiaryOptions: string[] = [];

  /**
   * JSON array of location key/values
   */
  @Prop() locationOptions: string[] = [];

  /**
   * JSON array of funding key/values
   */
  @Prop() fundingOptions: string[] = [];

  @Prop() filtersApplied: boolean;

  /**
   * This helps us inject a pre-selected dropdown value from outside of this component.
   * This is especially helpful for the Meta campaign and Explore pages, where searching
   * by text whipes out previous sort options and re-uses Relevance, or where one of those
   * two pages is loaded directly with URL parameters - in such a scenario the dropdown
   * shows that it's pre-selected. DON-558.
   */
  @Prop() selectedSortByOption: 'Most raised' | 'Match funds remaining' | 'Relevance' = null;

  /**
   * For injecting the chosen category to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop() selectedFilterCategory: string = null;

  /**
   * For injecting the chosen beneficiary to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop() selectedFilterBeneficiary: string = null;

  /**
   * For injecting the chosen location to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop() selectedFilterLocation: string = null;

  /**
   * For injecting the chosen funding to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop() selectedFilterFunding: string = null;

  private getSearchAndFilterObject(): {
    searchText: string;
    sortBy: string;
    filterCategory: string;
    filterBeneficiary: string;
    filterLocation: string;
    filterFunding: string;
  } {
    const event: {
      searchText: string;
      sortBy: string;
      filterCategory: string;
      filterBeneficiary: string;
      filterLocation: string;
      filterFunding: string;
    } = {
      searchText: this.searchText,
      sortBy: this.sortBy,
      filterCategory: this.filterCategory,
      filterBeneficiary: this.filterBeneficiary,
      filterFunding: this.filterFunding,
      filterLocation: this.filterLocation,
    };

    return event;
  }

  @Listen('doSelectChange')
  doOptionSelectCompletedHandler(event) {
    this.sortBy = this.el.shadowRoot.getElementById('sort-by').selectedValue;
    this.filterCategory = this.el.shadowRoot.getElementById('categories').selectedValue;
    this.filterBeneficiary = this.el.shadowRoot.getElementById('beneficiaries').selectedValue;
    this.filterLocation = this.el.shadowRoot.getElementById('locations').selectedValue;
    this.filterFunding = this.el.shadowRoot.getElementById('funding').selectedValue;

    // If this method was trigerred by the selection of a 'Sort by' dropdown option, then
    // emit an event to search, but do NOT emit an event for example when filter options
    // are selected, until the 'Apply filters' button is pressed which is handled separately
    // by `handleApplyFilterButtonClick()`.
    // Additional note -> we could, instead, do this:
    // `<biggive-form-field-select placeholder="Sort by" id="sort-by" onDoSelectChange={this.someHandleMethod}>`
    // but the problem with that is that `someHandleMethod` gets called first and then this
    // method gets called, leading to two calls and more risk for error. DON-570.
    if (event.detail.placeholder === this.sortByPlaceholderText) {
      console.log('emitting event:');
      console.log(this.getSearchAndFilterObject());
      this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
    }
  }

  private handleApplyFilterButtonClick = () => {
    const searchAndFilterObj = this.getSearchAndFilterObject();
    this.doSearchAndFilterUpdate.emit(searchAndFilterObj);
    this.el.shadowRoot.getElementById('filter-popup').closeFromOutside();

    this.filtersApplied =
      typeof searchAndFilterObj.filterBeneficiary === 'string' ||
      typeof searchAndFilterObj.filterCategory === 'string' ||
      typeof searchAndFilterObj.filterFunding === 'string' ||
      typeof searchAndFilterObj.filterLocation === 'string';
  };

  private handleSearchButtonPressed = () => {
    this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
  };

  private handleSearchTextChanged = (event: any) => {
    this.searchText = event.target.value;
  };

  private handleEnterPressed = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
    }
  };

  private handleFilterButtonClick = () => {
    this.el.shadowRoot.getElementById('filter-popup').openFromOutside();
  };

  private handleClearAll = () => {
    this.searchText = null;
    this.sortBy = null;
    this.filterCategory = null;
    this.filterBeneficiary = null;
    this.filterLocation = null;
    this.filterFunding = null;
    this.filtersApplied = false;
    this.doClearFilters.emit(true);
  };

  componentWillRender() {
    this.filtersApplied =
      this.selectedFilterCategory !== null || this.selectedFilterBeneficiary !== null || this.selectedFilterFunding !== null || this.selectedFilterLocation !== null;
  }

  render() {
    return (
      <div class={'container space-below-' + this.spaceBelow}>
        <div class="sleeve">
          <div class="search-wrap">
            <h4>{this.intro}</h4>
            <div class="field-wrap">
              <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
                  <path d={faMagnifyingGlass.icon[4].toString()} />
                </svg>
                <input
                  type="text"
                  value={this.searchText}
                  class="input-text"
                  placeholder={this.placeholderText}
                  onInput={this.handleSearchTextChanged}
                  onKeyDown={this.handleEnterPressed}
                />
              </div>
              <biggive-button onClick={this.handleSearchButtonPressed} label={this.buttonText} />
            </div>
          </div>
          <div class="sort-filter-wrap">
            <div class="clear-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-clear-all" viewBox="0 0 512 512">
                <path d={faFilterSlash.icon[4].toString()} />
              </svg>
              <a onClick={this.handleClearAll}>Clear all</a>
            </div>
            <div class="sort-wrap">
              <biggive-form-field-select placeholder="Sort by" selectedLabel={this.selectedSortByOption} id="sort-by">
                <biggive-form-field-select-option value="amountRaised" label="Most raised"></biggive-form-field-select-option>
                <biggive-form-field-select-option value="matchFundsRemaining" label="Match funds remaining"></biggive-form-field-select-option>
                <biggive-form-field-select-option value="Relevance" label="Relevance"></biggive-form-field-select-option>
              </biggive-form-field-select>
            </div>

            <div class="filter-wrap">
              <biggive-button
                class="filter"
                colourScheme={this.filtersApplied ? 'secondary' : 'primary'}
                onClick={this.handleFilterButtonClick}
                label="Filters"
                fullWidth={true}
                space-below="0"
              ></biggive-button>
              <biggive-popup id="filter-popup">
                <h4 class="space-above-0 space-below-3 colour-primary">Filters</h4>
                <biggive-form-field-select placeholder="Category" selectedLabel={this.selectedFilterCategory} id="categories" space-below="2">
                  {this.categoryOptions.length === 0
                    ? undefined
                    : this.categoryOptions.map(option => <biggive-form-field-select-option value={option} label={option}></biggive-form-field-select-option>)}
                </biggive-form-field-select>

                <biggive-form-field-select placeholder="Beneficiary" selectedLabel={this.selectedFilterBeneficiary} id="beneficiaries" space-below="2">
                  {this.beneficiaryOptions.length === 0
                    ? undefined
                    : this.beneficiaryOptions.map(option => <biggive-form-field-select-option value={option} label={option}></biggive-form-field-select-option>)}
                </biggive-form-field-select>

                <biggive-form-field-select placeholder="Location" selectedLabel={this.selectedFilterLocation} id="locations" space-below="2">
                  {this.locationOptions.length === 0
                    ? undefined
                    : this.locationOptions.map(option => <biggive-form-field-select-option value={option} label={option}></biggive-form-field-select-option>)}
                </biggive-form-field-select>

                <biggive-form-field-select placeholder="Funding" selectedLabel={this.selectedFilterFunding} id="funding" space-below="2">
                  {this.fundingOptions.length === 0
                    ? undefined
                    : this.fundingOptions.map(option => <biggive-form-field-select-option value={option} label={option}></biggive-form-field-select-option>)}
                </biggive-form-field-select>
                <div class="align-right">
                  <biggive-button label="Apply filters" onClick={this.handleApplyFilterButtonClick} />
                </div>
              </biggive-popup>
            </div>
          </div>
          <div class="campaign-grid">
            <slot name="campaign-grid"></slot>
          </div>
        </div>
      </div>
    );
  }
}
