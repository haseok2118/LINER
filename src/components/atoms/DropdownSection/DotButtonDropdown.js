import React, { useState } from 'react'
import styled from '@emotion/styled';

const DotButtonDropdown = () => {
  const [dropDown, setDropDown] = useState(false)
  const handleClick = () => {
    setDropDown(!dropDown)
  }
  return (
    <ButtonDropdownContainer>
      <ButtonDropdownButton  onClick={handleClick} />
      {dropDown &&
      <ButtonDropdownContentWrapper>
        <ButtonDropdownContent>
          <span><img src="./images/like-dropdown.svg" alt=""/></span>
          More pages like this
        </ButtonDropdownContent>
        <ButtonDropdownContent>
          <span><img src="./images/dislike-dropdown.svg" alt=""/></span>
          Fewer pages like this
        </ButtonDropdownContent>
        <ButtonDropdownContent>
          <span><img src="./images/hide-dropdown.svg" alt=""/></span>
          Hide this page
        </ButtonDropdownContent>
      </ButtonDropdownContentWrapper>
      }
      {dropDown && <></>}
    </ButtonDropdownContainer>
  )
}

export default DotButtonDropdown;

 const ButtonDropdownContainer = styled.div`
display: inline-block;
top: 400px;
backgroubd-color: #fff;
`;

const ButtonDropdownButton = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-image: url("/images/more-light.svg");
background-size: cover;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"More";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 30px;
    left: 0;
    letter-spacing: 0.8px;
    border-radius: 3px;
  }
}
`;

 const ButtonDropdownContentWrapper = styled.div`
position: absolute;
min-width: 200px;
padding: 8px 0;
border: 1px solid #DDE1E6;
border-radius: 3px;
background-color: #fff;
z-index: 999;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
`;
 const ButtonDropdownContent = styled.div`
width: 100%;
height: 40px;
font-size: 15px;
padding: 8px 8px;
display: flex;
align-items: center;
border-radius: 5px;
span {
  display: flex;
  padding: 10px;
  align-items: center;
}
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;