import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';

const sortOptionLabels = {
  relevance: 'Relevance',
  amountRaised: 'Most raised',
  leastRaised: 'Least raised',
  closeToTarget: 'Close to campaign target',
  matchFundsRemaining: 'Match funds remaining',
} as const;

export type sortOptionKey = keyof typeof sortOptionLabels;
export type sortOptionLabel = (typeof sortOptionLabels)[sortOptionKey];

@Component({
  tag: 'biggive-campaign-card-filter-grid',
  styleUrl: 'biggive-campaign-card-filter-grid.scss',
  shadow: true,
})
export class BiggiveCampaignCardFilterGrid {
  private sortByPlaceholderText = 'Sort by';
  private beneficiariesPlaceHolderText = 'Select beneficiary';
  private categoriesPlaceHolderText = 'Select category';
  private locationsPlaceHolderText = 'Select location';
  private initialSortByOption: sortOptionLabel;

  /**
   * This and similar properties represent selections made in the popup but not yet applied.
   */
  private newSelectedFilterCategory: string | null = null;
  private newSelectedFilterBeneficiary: string | null = null;
  private newSelectedFilterLocation: string | null = null;

  @Element() el: HTMLBiggiveCampaignCardFilterGridElement;

  /**
   * This event `doSearchAndFilterUpdate` event is emitted and propogates to the parent
   * component which handles it
   */
  @Event({
    eventName: 'doSearchAndFilterUpdate',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  doSearchAndFilterUpdate: EventEmitter<{
    searchText: string | null;
    sortBy: string | null;
    filterCategory: string | null;
    filterBeneficiary: string | null;
    filterLocation: string | null;
  }>;

  @Method()
  /**
   * Typically on non-negligible scroll away from the search area.
   */
  async unfocusInputs() {
    this.unfocusTextInput();
  }

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
  @Prop() searchText: string | null = null;

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
   * JSON array of category key/values, or takes a stringified equiavalent (for Storybook)
   */
  @Prop() categoryOptions: string | Record<string, string> | string[];

  /**
   * JSON array of beneficiary key/values, or takes a stringified equiavalent (for Storybook)
   */
  @Prop() beneficiaryOptions: string | Record<string, string> | string[];

  /**
   * JSON array of location key/values, or takes a stringified equiavalent (for Storybook)
   */
  @Prop() locationOptions: string | Record<string, string> | string[];

  /**
   * This helps us inject a pre-selected dropdown value from outside of this component.
   * This is especially helpful for the Meta campaign and Explore pages, where searching
   * by text wipes out previous sort options and re-uses Relevance, or where one of those
   * two pages is loaded directly with URL parameters - in such a scenario the dropdown
   * shows that it's pre-selected. DON-558.
   */
  @Prop({ mutable: true })
  selectedSortByOption: sortOptionLabel;

  /**
   * For injecting the chosen category to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop({ mutable: true }) selectedFilterCategory: string | null = null;

  /**
   * For injecting the chosen beneficiary to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop({ mutable: true }) selectedFilterBeneficiary: string | null = null;

  /**
   * For injecting the chosen location to filter by, as per the comment above for `selectedSortByOption`.
   */
  @Prop({ mutable: true }) selectedFilterLocation: string | null = null;

  /**
   * State variable - causes re-render on change
   */
  @State() filtersApplied: boolean;

  private categoryFilterSelectionChanged = (value: string) => {
    this.newSelectedFilterCategory = value;
  };

  private beneficiarySelectionChanged = (value: string) => {
    this.newSelectedFilterBeneficiary = value;
  };

  private locationSelectionChanged = (value: string) => {
    this.newSelectedFilterLocation = value;
  };

  private sortBySelectionChanged = (value: sortOptionLabel) => {
    this.selectedSortByOption = value;
    this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
  };

  private getSearchAndFilterObject() {
    return {
      searchText: this.searchText,
      sortBy: this.selectedSortByOption,
      filterCategory: this.selectedFilterCategory,
      filterBeneficiary: this.selectedFilterBeneficiary,
      filterLocation: this.selectedFilterLocation,
    };
  }

  private handleApplyFilterButtonClick = () => {
    this.selectedFilterCategory = this.newSelectedFilterCategory ?? this.selectedFilterCategory;
    this.selectedFilterBeneficiary = this.newSelectedFilterBeneficiary ?? this.selectedFilterBeneficiary;
    this.selectedFilterLocation = this.newSelectedFilterLocation ?? this.selectedFilterLocation;

    const searchAndFilterObj = this.getSearchAndFilterObject();
    this.doSearchAndFilterUpdate.emit(searchAndFilterObj);

    const filterPopup = this.el.shadowRoot?.getElementById('filter-popup') as HTMLBiggivePopupElement | undefined;
    if (filterPopup) {
      filterPopup.closeFromOutside();
    }

    this.filtersApplied =
      typeof searchAndFilterObj.filterBeneficiary === 'string' || typeof searchAndFilterObj.filterCategory === 'string' || typeof searchAndFilterObj.filterLocation === 'string';
  };

  private removeFilter(filterKey: 'locations' | 'categories' | 'beneficiaries') {
    switch (filterKey) {
      case 'beneficiaries':
        this.selectedFilterBeneficiary = null;
        break;
      case 'categories':
        this.selectedFilterCategory = null;
        break;
      case 'locations':
        this.selectedFilterLocation = null;
        break;
      default:
        // This asks the compiler to check that we are in dead code, i.e. we covered all the possible filter keys
        // above. If we missed one we would get a compile error trying to assign a string to a never.
        const exhaustiveSwitch: never = filterKey;
        console.error(exhaustiveSwitch);
    }

    const selectEl = this.el.shadowRoot?.getElementById(filterKey) as HTMLBiggiveFormFieldSelectElement | undefined;
    if (!selectEl) {
      return;
    }

    selectEl.selectedLabel = null;
    selectEl.selectedValue = null;
    this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
  }

  private handleSearchButtonPressed = () => {
    this.unfocusTextInput();
    this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());

    if (this.hasSearchTerm()) {
      this.selectedSortByOption = 'Relevance';
    }
  };

  private handleSearchTextChanged = (event: any) => {
    this.searchText = event.target.value;
  };

  private handleEnterPressed = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.unfocusTextInput();
      this.doSearchAndFilterUpdate.emit(this.getSearchAndFilterObject());
    }
  };

  private handleFilterButtonClick = () => {
    this.newSelectedFilterBeneficiary = this.selectedFilterBeneficiary;
    this.newSelectedFilterCategory = this.selectedFilterCategory;
    this.newSelectedFilterLocation = this.selectedFilterLocation;

    const filterPopup = this.el.shadowRoot?.getElementById('filter-popup') as HTMLBiggivePopupElement | undefined;
    if (filterPopup) {
      filterPopup.openFromOutside();
    }
  };

  private handleClearAll = () => {
    this.unfocusTextInput();

    // Set the 'Filters' button back to the primary background colour
    this.filtersApplied = false;

    // Clear all
    this.searchText = null;
    this.selectedSortByOption = this.initialSortByOption;
    this.selectedFilterBeneficiary = null;
    this.selectedFilterCategory = null;
    this.selectedFilterLocation = null;

    // Clear <biggive-form-field-select> components' internal selectedValue and selectedLabel. DON-654.
    ['sort-by', 'categories', 'beneficiaries', 'locations', 'funding'].forEach(id => {
      const theEl = this.el.shadowRoot?.getElementById(id) as HTMLBiggiveFormFieldSelectElement | undefined;
      if (!theEl) {
        return;
      }

      theEl.selectedValue = null;
      theEl.selectedLabel = null;
    });

    const selectedFilters = this.el.shadowRoot?.querySelector('.selected-filters');
    if (selectedFilters) {
      selectedFilters.querySelectorAll('.button').forEach(button => {
        button.remove();
      });
    }

    // Emit the doSearchAndFilterUpdate event with null values. DON-654
    this.doSearchAndFilterUpdate.emit({
      searchText: null,
      sortBy: null,
      filterCategory: null,
      filterBeneficiary: null,
      filterLocation: null,
    });
  };

  /**
   * We've seen desktop Safari jump to this input when it's focused at times when that's
   * unhelpful, so on a few occasions we proactively blur it.
   */
  private unfocusTextInput() {
    const input = this.el.shadowRoot?.querySelector('.input-text') as HTMLInputElement | undefined;
    if (input) {
      input.blur();
    }
  }

  componentWillRender() {
    this.filtersApplied = this.selectedFilterCategory !== null || this.selectedFilterBeneficiary !== null || this.selectedFilterLocation !== null;
    this.initialSortByOption = this.selectedSortByOption;
  }

  render() {
    const sortOptions = this.getSortOptions();

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
                  value={this.searchText ?? ''}
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
            <div class="filter-wrap">
              <biggive-button class="filter" colourScheme="primary" onClick={this.handleFilterButtonClick} label="Filter" fullWidth={true} space-below="0"></biggive-button>
              <biggive-popup id="filter-popup">
                <h4 class="space-above-0 space-below-3 text-colour-primary">Filters</h4>
                <div class="select-wrapper-1">
                  <biggive-form-field-select
                    backgroundColour="white"
                    prompt="Category"
                    placeholder={this.categoriesPlaceHolderText}
                    selectedLabel={this.selectedFilterCategory}
                    selectedValue={this.selectedFilterCategory}
                    options={this.optionsToArray(this.categoryOptions || [])}
                    selectionChanged={this.categoryFilterSelectionChanged}
                    id="categories"
                    space-below="2"
                  ></biggive-form-field-select>
                </div>

                <div class="select-wrapper-2">
                  <biggive-form-field-select
                    backgroundColour="white"
                    prompt="Beneficiary"
                    placeholder={this.beneficiariesPlaceHolderText}
                    selectedLabel={this.selectedFilterBeneficiary}
                    selectedValue={this.selectedFilterBeneficiary}
                    options={this.optionsToArray(this.beneficiaryOptions || [])}
                    selectionChanged={this.beneficiarySelectionChanged}
                    id="beneficiaries"
                    space-below="2"
                  ></biggive-form-field-select>
                </div>

                <div class="select-wrapper-3">
                  <biggive-form-field-select
                    backgroundColour="white"
                    prompt="Location"
                    placeholder={this.locationsPlaceHolderText}
                    selectedLabel={this.selectedFilterLocation}
                    selectedValue={this.selectedFilterLocation}
                    options={this.optionsToArray(this.locationOptions || [])}
                    selectionChanged={this.locationSelectionChanged}
                    id="locations"
                    space-below="2"
                  ></biggive-form-field-select>
                </div>

                <div class="align-right">
                  <biggive-button label="Apply filters" onClick={this.handleApplyFilterButtonClick} />
                </div>
              </biggive-popup>
            </div>

            <div class="sort-wrap">
              <biggive-form-field-select
                options={sortOptions}
                prompt={null}
                select-style="underlined"
                placeholder={this.sortByPlaceholderText}
                selectedLabel={this.selectedSortByOption}
                selectedValue={this.getSelectedValue()}
                selectionChanged={this.sortBySelectionChanged}
                id="sort-by"
              >
                <biggive-form-field-select-option value="amountRaised" label="Most raised"></biggive-form-field-select-option>
                <biggive-form-field-select-option value="leastRaised" label="Least raised"></biggive-form-field-select-option>
                <biggive-form-field-select-option value="matchFundsRemaining" label="Match funds remaining"></biggive-form-field-select-option>
                {(this.searchText || '').length > 0 ? <biggive-form-field-select-option value="Relevance" label="Relevance"></biggive-form-field-select-option> : null}
              </biggive-form-field-select>
            </div>
          </div>
          <div class="selected-filter-wrap">
            <div class="selected-filters">
              {this.selectedFilterCategory && (
                <span
                  class="button"
                  onClick={() => {
                    this.removeFilter('categories');
                  }}
                >
                  {this.selectedFilterCategory}
                </span>
              )}
              {this.selectedFilterBeneficiary && (
                <span
                  class="button"
                  onClick={() => {
                    this.removeFilter('beneficiaries');
                  }}
                >
                  {this.selectedFilterBeneficiary}
                </span>
              )}
              {this.selectedFilterLocation && (
                <span
                  class="button"
                  onClick={() => {
                    this.removeFilter('locations');
                  }}
                >
                  {this.selectedFilterLocation}
                </span>
              )}
            </div>
            <div class="clear-all">
              <a onClick={this.handleClearAll}>Clear all</a>
            </div>
          </div>
          <div class="campaign-grid">
            <slot name="campaign-grid"></slot>
          </div>
        </div>
      </div>
    );
  }

  // I'm not sure if I understand the reasoning for own-methods-must-be-private. I made the method below public to unit
  // test it. Maybe the idea is that we should move anything with enough logic to test outside the component class? I
  // can do that if people think it's better.
  //
  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  public getSelectedValue(): undefined | string {
    const sortByOption = this.selectedSortByOption;
    if (sortByOption === undefined) {
      return undefined;
    }
    const sortOptions = this.getSortOptions();
    const selected = sortOptions.filter(option => {
      return option.label.toLowerCase() === sortByOption.toLowerCase();
    })[0];

    return selected?.value;
  }

  private getSortOptions(): {
    label: sortOptionLabel;
    value: sortOptionKey;
  }[] {
    // @ts-ignore  - see https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    const sortOptionKeys: sortOptionKey[] = Object.getOwnPropertyNames(sortOptionLabels);
    const relevantOptionKeys = sortOptionKeys.filter(key => key !== 'relevance' || this.hasSearchTerm());

    return relevantOptionKeys.map((key: sortOptionKey) => ({ value: key, label: sortOptionLabels[key] }));
  }

  private hasSearchTerm() {
    return typeof this.searchText === 'string' && this.searchText.length > 0;
  }

  private optionsToArray(options: string | Record<string, string> | string[]): {
    label: string;
    value: string;
  }[] {
    if (typeof options === 'string') {
      options = JSON.parse(options);
    }
    if (Array.isArray(options)) {
      return options.map((option: string) => ({ value: option, label: option }));
    }

    return Object.entries(options).map(entry => ({ value: entry[0], label: entry[1] }));
  }
}
