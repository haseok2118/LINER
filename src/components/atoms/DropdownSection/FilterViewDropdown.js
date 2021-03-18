import React, { useState } from 'react';
import styled from '@emotion/styled';
const filterViewData = [
  { id: "f1", story: "Pages" },
  { id: "f2", story: "Highlights" },
];

const FilterViewDropdown = () => {
  const [filterViewOpen, setFilterView] = useState(false);
  const [filterName, setFilterName] = useState("Pages");

  const markedOnTheTarget = () => {
    let onTarget = document.getElementById(`${filterName}`);
    if (onTarget) {
      onTarget.style.color = "#3DBDB8";
      onTarget.lastElementChild.style.display = "block";
    } else {
      return;
    }
    
  }
  const setTimer = () => {
    setTimeout(markedOnTheTarget, 0);
  };

  const handleOpenFilterView = () => {
    let arrowClose = document.getElementById("arrow-close");
    let arrowOpen = document.getElementById("arrow-open");
   
    if (arrowClose.style.display === "block") {
      arrowClose.style.display = "none";
      arrowOpen.style.display = "block";
    } else {
      arrowClose.style.display = "block";
      arrowOpen.style.display = "none";
    }

    setFilterView(!filterViewOpen);
    setTimer();
  };

  const handleCheckedFilterView = (e) => {
    //더블 클릭해야 색상이 변경되는 부분 해결해야함.
    // let curTarget = document.getElementById(`${e.target.id}`);
    // console.log(curTarget.style.color)
    // if (curTarget.lastElementChild.style.display === "none") {
    //   curTarget.lastElementChild.style.display = "block";
    //   curTarget.style.color = "rgb(2, 189, 184)";
    // } else {
    //   curTarget.lastElementChild.style.display = "none";
    //   curTarget.style.color = "rgb(82, 86, 93)";
    // }
    let targetClass = e.target.className;
    let tabArray = document.getElementsByClassName(`${targetClass}`);
    let tabName = e.target.id;
    let changeTarget = document.getElementById(tabName);
    for (let x = 0; x < tabArray.length; x += 1) {
      tabArray[x].style.color = "rgb(82, 86, 93)";
      tabArray[x].lastElementChild.style.display = "none";
    };
    
    changeTarget.style.color = "#3DBDB8";
    changeTarget.lastElementChild.style.display = "block";
    setFilterName(e.target.textContent);
  };

  return (
    <FilterViewDropdownContainer>
      <FilterViewDropdownButton onClick = {handleOpenFilterView}>
        {filterName}
        <ArrowForClosingFilter id="arrow-close" src="collapse.svg" alt="" />
        <ArrowForOpeningFilter id="arrow-open" src="expand-grey.svg" alt="" />
      </FilterViewDropdownButton>
      {filterViewOpen &&
        <FilterViewDropdownContentWrapper>
          <div>View as</div>
        {
          filterViewData.map((item) => {
            
            return (
            <FilterViewDropdownContent key={item.id} id={item.story} onClick={handleCheckedFilterView}>
            {item.story}
            <span><img src="check-primary.svg" alt="" /></span>
              </FilterViewDropdownContent>
            )
          }
          )
        }
        </FilterViewDropdownContentWrapper>
      }
      {!filterViewOpen && <></>}
    </FilterViewDropdownContainer>
  )
}

export default FilterViewDropdown;

const FilterViewDropdownContainer = styled.div`
display: inline-block;
margin-right: 10px;
`;
const FilterViewDropdownButton = styled.button`
position:relative;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 15px;
color: #787d86;
border: none;
background-color: #fff;
cursor: pointer;
:hover {
  color: black;
  opacity: 0.7;
:focus {
  outline: none;
}
`;

const FilterViewDropdownContentWrapper = styled.ul`
position: absolute;
min-width: 150px;
padding: 8px 0;
z-index: 1;
background-color: #fff;
list-style: none;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
border-radius: 8px;
margin-top: 10px;
div {
  font-size: 15px;
  font-weight: 500;
  height: 36px;
  color: #969aa2;
  padding: 8px 8px;
}
`;
const FilterViewDropdownContent = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 40px;
font-size: 15px;
font-weight: 500;
color: rgb(82, 86, 93);
padding: 8px 8px;
z-index:1;
span{
  display: none;
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