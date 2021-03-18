import React, { useState } from 'react';
import {
  ForYouSectionContainer,
  ForYouSectionWrapper,
  ForYouSectionHeader,
  ForYouSectionSubHeader,
  ForYouHeaderTitle,
} from './ForYouElements';
import Data from '../../Data';
import ForYouContent from './ForYouContent';
import RightSidebarSection from '../RightSidebarSection';
import LanguagesDropdown from '../atoms/DropdownSection/LanguagesDropdown';

export const ForYouSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [saveClick, setSaveClick] = useState(false);
  const header = document.getElementById("for-you-header");
  const title = document.getElementById("for-you-title");
  const info = document.getElementById("for-you-info");
  console.log(window.pageYOffset);
  console.log(header );
  // const handleShirnkHeader = () => {
  //   if (window.pageYOffset >= 70) {
  //     header.style.top = "70px";
  //     header.style.position = "fixed";
  //     header.style.width = "680px";
  //     header.style.hight = "20px";
  //     title.style.fontSize = "16px";
  //     info.style.display = "none";
  //   } else {
  //     header.style.position = "static";
  //     header.style.hight = "40px";
  //     title.style.fontSize = "32px";
  //     info.style.display = "block";
  //   }
  // };
  // window.onscroll = handleShirnkHeader;

  const handleOpenShareModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleClickSaveButton = () => {
    setSaveClick(!saveClick)
  }

  return (
    <ForYouSectionContainer>
      <ForYouSectionWrapper>
        <ForYouSectionHeader id="for-you-header">
          <ForYouHeaderTitle id="for-you-title">
            For You
            <div id="for-you-info">
              <img src="./images/info.svg" alt="" />
            </div>
          </ForYouHeaderTitle>
          <LanguagesDropdown />
        </ForYouSectionHeader>
        <ForYouSectionSubHeader>
          Picked by LINER, just for you
        </ForYouSectionSubHeader>
        <ForYouContent
          Data={Data}
          handleOpenShareModal={handleOpenShareModal}
          modalOpen={modalOpen}
          handleClickSaveButton={handleClickSaveButton}
          saveClick={saveClick}
        />
      </ForYouSectionWrapper>
      <RightSidebarSection />
    </ForYouSectionContainer>
  )
}

export default ForYouSection