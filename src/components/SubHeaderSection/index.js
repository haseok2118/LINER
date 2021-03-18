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
import FilterViewDropdown from '../atoms/DropdownSection/FilterViewDropdown';
import FilterTagDropdown from '../atoms/DropdownSection/FilterTagDropdown';
import SearchOptionsDropdown from '../atoms/DropdownSection/SearchOptionsDropdown'
export const SubHeader = () => {

  const [searchBar, setSearchBar] = useState(false);
  const handleSearchBarOpen = () => {
    setSearchBar(!searchBar)
  };
  const handleTabClick = (e) => {
    let targetClass = e.target.className;
    let tabArray = document.getElementsByClassName(`${targetClass}`);
    let tabName = e.target.id;
    
    for (let x = 0; x < tabArray.length; x += 1) {
      tabArray[x].style.color = "#81868F";
    };
    
    document.getElementById(tabName).style.color = "black";
  };
  return (
    <>
      {
        !searchBar &&
        <SubHeaderContainer>
          <SubHeaderTab>
            <a className="sub-header-tab" id="sub-highlight" onClick={handleTabClick}>Highlights</a>
            <a className="sub-header-tab" id="sub-tags" onClick={handleTabClick}>Tags</a>
          </SubHeaderTab>
          <SubHeaderButtons>
            <FilterViewDropdown />
            <FilterTagDropdown />
            <SearchHighlightsButton onClick={handleSearchBarOpen} />
          </SubHeaderButtons>
        </SubHeaderContainer>
      }
      {searchBar &&
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
