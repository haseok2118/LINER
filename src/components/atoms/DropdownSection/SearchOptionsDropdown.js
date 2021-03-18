import React, { useState } from 'react';
import styled from '@emotion/styled';

const SearchOptionsDropdown = () => {

  const [searchOptionsOpen, setSearchOptions] = useState(false);
  const [options, setOptions] = useState([
    {id: 1, title: "Title", active: true },
    {id: 2, title: "URL", active: true },
    {id: 3, title: "Highlight", active: true },
    {id: 4, title: "Description", active: true },
    {id: 5, title: "Comment", active: true },
  ]);

  const handleOpenSearchOptions = () => {
    let arrowClose = document.getElementById("search-arrow-close");
    let arrowOpen = document.getElementById("search-arrow-open");
    if (arrowClose.style.display === "block") {
      arrowClose.style.display = "none";
      arrowOpen.style.display = "block";
    } else {
      arrowClose.style.display = "block";
      arrowOpen.style.display = "none";
    }
    setSearchOptions(!searchOptionsOpen);
  };

  const handleCheckedSearchOptions = (e) => {
    let tabName = e.target.id;
    console.log(`${tabName}`)
    setOptions(
      options.map(item =>
        item.title === `${tabName}` ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <SearchOptionsDropdownContainer>
      <SearchOptionsDropdownButton onClick = {handleOpenSearchOptions}>
        Search Options
        <ArrowForClosingFilter id="search-arrow-close" src="./images/collapse.svg" alt="" />
        <ArrowForOpeningFilter id="search-arrow-open" src="./images/expand-grey.svg" alt="" />
      </SearchOptionsDropdownButton>
      {searchOptionsOpen &&
        <SearchOptionsDropdownContentWrapper>
          <div>Search Options</div>
        {
          options.map((item) => 
            (
            <SearchOptionsDropdownContent key={item.id} id={item.title} onClick={handleCheckedSearchOptions} style={{color: `${options.active}` ? "#3DBDB8" : "rgb(82, 86, 92)"}}>
              {item.title}
              <span style={{ display: `${options.active}` ? "block" : "none" }}><img src="./images/check-primary.svg" alt="" /></span>
            </SearchOptionsDropdownContent>
            )
          )
        }
        </SearchOptionsDropdownContentWrapper>
      }
      {!searchOptionsOpen && <></>}
    </SearchOptionsDropdownContainer>
  )
}

export default SearchOptionsDropdown;

const SearchOptionsDropdownContainer = styled.div`
display: inline-block;
height: 40px;
float: right;
`;
const SearchOptionsDropdownButton = styled.button`
position:relative;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 16px;
color: #787d86;
border: none;
background-color: #fff;
cursor: pointer;
outline: none;
:hover {
  color: black;
  opacity: 0.7;
`;

const SearchOptionsDropdownContentWrapper = styled.ul`
position: absolute;
min-width: 150px;
padding: 8px 0;
z-index: 1;
background-color: #fff;
list-style: none;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
border-radius: 8px;
div {
  font-size: 15px;
  font-weight: 500;
  height: 36px;
  color: #969aa2;
  padding: 8px 8px;
}
`;
const SearchOptionsDropdownContent = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 40px;
font-size: 15px;
font-weight: 500;
padding: 8px 8px;
z-index:1;
span{
  justify-self: end;
}
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;

const ArrowForClosingFilter = styled.img`
display: none;
margin: 0;
width: 16px;
height: 16px;
`;
const ArrowForOpeningFilter = styled.img`
display: block;
margin: 0;
width: 16px;
height: 16px;
`;