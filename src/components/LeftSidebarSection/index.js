import React from 'react'
import {
  LeftSidebarContainer,
  Tab,
  Button,
} from './LeftSidebarElements'


const LeftSidebarSection = () => {
  const handleTabClick = (e) => {
    let targetClass = e.target.className;
    let tabArray = document.getElementsByClassName(`${targetClass}`);
    let tabName = e.target.id;
    
    for (let x = 0; x < tabArray.length; x += 1) {
      tabArray[x].style.color = "#81868F";
      tabArray[x].style.fontWeight = "normal";
    };
    
    document.getElementById(tabName).style.color = "#3DBDB8";
    document.getElementById(tabName).style.fontWeight = "bold"
  };

  return (
    <LeftSidebarContainer>
      <Tab href="#" id="forYou" onClick={handleTabClick}>For You</Tab>
      <Tab href="#" id="myHightlight" onClick={handleTabClick}>My Hightlights</Tab>
      <Tab href="#" id="more" onClick={handleTabClick}>More</Tab>
      <Button>Upgrade</Button>
    </LeftSidebarContainer>
  )
}

export default LeftSidebarSection;