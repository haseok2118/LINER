import React, { useState } from 'react';
import styled from '@emotion/styled';

const FilterTagDropdown = () => {
  const [filterTagOpen, setFilterTag] = useState(false);
  const [colorTag, setColorTag] = useState(false);
  const handleOpenFilterTag = () => {
    setFilterTag(!filterTagOpen);
    setColorTag(false);
  };
  const handleClickColorTag = () => {
    setColorTag(!colorTag);
  };

  return (
    <FilterTagDropdownContainer>
      <FilterTagDropdownButton onClick={handleOpenFilterTag}>
        <img src="filter-header.svg" alt="" />
      </FilterTagDropdownButton>
      {filterTagOpen &&
        <FilterTagDropdownContentWrapper>
          <div>
            Tags<span>Reset</span>
          </div>
          <SearchTags onClick={handleClickColorTag}>
            <input type="text" placeholder="Search tags"/>
          </SearchTags>
          <div>
          Color Filter
          </div>
        {!colorTag &&
          <>
            <FilterTagContent key="ft1">
            <Color style={{ backgroundColor: "#ffff83" }}/>Yellow
            </FilterTagContent>
            <FilterTagContent key="ft1">
              <Color style={{ backgroundColor: "#a6ffe9" }}/>Mint
            </FilterTagContent>
            <FilterTagContent key="ft1">
              <Color style={{ backgroundColor: "#ffc7ba" }}/>Orange
            </FilterTagContent>
            <FilterTagContent key="ft1">
              <Color style={{ backgroundColor: "#d9c3ff" }}/>Violet
            </FilterTagContent>
            <FilterTagContent key="ft1">
              <Color style={{ backgroundColor: "#b8dcff" }}/>Blue
            </FilterTagContent>
            <FilterTagContent key="ft1">
              <Color style={{ backgroundColor: "#ffd0ef" }}/>Pink
            </FilterTagContent>
          </>
          }
        {colorTag &&
          <FilterSearchingTag>
            No Tags
          </FilterSearchingTag>
        }
          
        </FilterTagDropdownContentWrapper>
      }
      {!filterTagOpen && <></>}
    </FilterTagDropdownContainer>
  )
}

export default FilterTagDropdown;

const FilterTagDropdownContainer = styled.div`
display: inline-block;
margin-right: 10px;
`;
const FilterTagDropdownButton = styled.button`
position:relative;
justify-content: center;
align-items:center;
display: flex;
font-size: 15px;
color: #787d86;
border: none;
background-color: #fff;
width: 30px;
height: 30px;
border-radius: 50%;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Search";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 32px;
    letter-spacing: 0.8px;
    border-radius: 2px;
  }
:focus {
  outline: none;
}
`;

const FilterTagDropdownContentWrapper = styled.ul`
position: absolute;
min-width: 230px;
z-index: 1;
background-color: #fff;
list-style: none;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
margin-top: 10px;
padding: 16px 0;
border-radius: 8px;
div {
  font-size: 15px;
  font-weight: 500;
  color: #969aa2;
  padding:0 16px;
  margin-bottom: 15px;
  span{
    float:right;
    font-size: 13px;
    font-weight: 400;
    :hover {
      color: black;
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
`;
const SearchTags = styled.div`
display: flex;
align-items: center;
height: 40px;
border-bottom: 1px solid #DDE1E6;
input {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.5;
  border: none;
  ::placeholder {
    color: #DDE1E6;
  }
  :focus {
    outline: none;
  }
}
`;
const FilterTagContent = styled.li`
display: flex;
align-items: center;
width: 100%;
height: 40px;
font-size: 15px;
font-weight: 500;
padding:0 16px;
color: rgb(82, 86, 93);
z-index:1;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;
const Color = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 15px;
`
const FilterSearchingTag = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 200px;
padding:0 16px;
font-size: 15px;
font-weight: 500;
color: #DDE1E6;
`;

