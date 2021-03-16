import React, { useState } from 'react';
import styled from '@emotion/styled';
const languageData = [
  { id: "a1", story: "English" },
  { id: "a2", story: "한국어" },
  { id: "a3", story: "简体字" },
  { id: "a4", story: "繁體字" },
  { id: "a5", story: "日本語" },
  { id: "a6", story: "Others" },
];

const LanguagesDropdown = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const handleOpenLanguages = () => {
    let arrowClose = document.getElementById("arrow-close");
    let arrowOpen = document.getElementById("arrow-open");
    setLanguageOpen(!languageOpen);
    if (arrowClose.style.display === "block") {
      arrowClose.style.display = "none";
      arrowOpen.style.display = "block";
    } else {
      arrowClose.style.display = "block";
      arrowOpen.style.display = "none";
    }
  }
  const handleCheckedLanguage = (e) => {
    //더블 클릭해야 색상이 변경되는 부분 해결해야함.
    let curTarget = document.getElementById(`${e.target.id}`);
    console.log(curTarget.style.color)

    if (curTarget.lastElementChild.style.display === "none") {
      curTarget.lastElementChild.style.display = "block";
      curTarget.style.color = "rgb(2, 189, 184)";
    } else {
      curTarget.lastElementChild.style.display = "none";
      curTarget.style.color = "rgb(82, 86, 93)";
    }
  }

  return (
    <LanguagesDropdownContainer>
      <LanguagesDropdownButton onClick = {handleOpenLanguages}>
        Languages
        <ArrowForClosingFilter id="arrow-close" src="collapse.svg" alt="" />
        <ArrowForOpeningFilter id="arrow-open" src="expand-grey.svg" alt="" />
      </LanguagesDropdownButton>
      {languageOpen &&
        <LanguagesDropdownContentWrapper>
          <div>Select for feed</div>
        {
          languageData.map( (item) => 
            (<LanguagesDropdownContent key={item.id} id={item.story} onClick={handleCheckedLanguage}>
              {item.story}
              <span><img src="check-primary.svg" alt="" /></span>
            </LanguagesDropdownContent>
            )
          )
        }
        </LanguagesDropdownContentWrapper>
      }
      {!languageOpen && <></>}
    </LanguagesDropdownContainer>
  )
}

export default LanguagesDropdown;

const LanguagesDropdownContainer = styled.div`
display: inline-block;
width: 145px;
`;
const LanguagesDropdownButton = styled.button`
width: 100%;
position:relative;
justify-content: flex-end;
display: flex;
font-size: 14px;
color: #787d86;
border: none;
background-color: #fff;
cursor: pointer;
:focus {
  outline: none;
}
`;

const LanguagesDropdownContentWrapper = styled.ul`
position: absolute;
min-width: 150px;
padding: 8px 0;
z-index: 1;
background-color: #fff;
list-style: none;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
margin-top: 10px;
div {
  font-size: 14px;
  height: 36px;
  color: #969aa2;
  padding: 8px 8px;
}
`;
const LanguagesDropdownContent = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 40px;
font-size: 14px;
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