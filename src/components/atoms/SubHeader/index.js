import React, { useState } from 'react';
import {
  SubHeaderContainer,
  SubHeaderTab,
  SubHeaderButtons,
  SearchHighlightsButton,
  SearchHighlightsBox,
  SearchHighlightsForm,
  SearchHighlightsBar,
  SearchCancelButton,
} from './SubHeaderElements';
import FilterViewDropdown from '../DropdownSection/FilterViewDropdown';
import FilterTagDropdown from '../DropdownSection/FilterTagDropdown';
import SearchOptionsDropdown from '../DropdownSection/SearchOptionsDropdown'
export const SubHeader = () => {

  const [searchBar, setSearchBar] = useState(false);
  const handleSearchBarOpen = () => {
    setSearchBar(!searchBar)
  };
  return (
    <>
      {
        !searchBar &&
        <SubHeaderContainer>
          <SubHeaderTab>
            <a>Highlights</a>
            <a>Tags</a>
          </SubHeaderTab>
          <SubHeaderButtons>
            <FilterViewDropdown />
            <FilterTagDropdown />
            <SearchHighlightsButton onClick={handleSearchBarOpen}>
              <img src="search-header.svg" alt="" />
            </SearchHighlightsButton>
          </SubHeaderButtons>
        </SubHeaderContainer>
      }
      {
        searchBar &&
      <>
        <SearchHighlightsBox>
          <FilterViewDropdown />
          <SearchHighlightsForm>
            <SearchHighlightsBar type="text"  placeholder="Search my highlights" />
            <SearchCancelButton onClick={handleSearchBarOpen}>
              Cancel
            </SearchCancelButton>
          </SearchHighlightsForm>
        </SearchHighlightsBox>
        <SearchOptionsDropdown />
      </>
      }
    </>
  )

}
export default SubHeader;
