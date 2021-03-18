import React, { useState } from 'react'
import styled from '@emotion/styled';
import ModalSection from '../ModalSection';

const ShareDropdown = ({
  shareDropdown,
  shareFullText,
  shareSummary,
  handleShareDropdown,
  handleShareFullTextModal,
  handleShareSummaryModal,
}) => {

  return (
    <ShareDropdownContainer>
      <ShareDropdownButton  onClick={handleShareDropdown} />
      {shareDropdown &&
        <ShareDropdownContentWrapper>
          <ShareDropdownContent onClick={handleShareFullTextModal}>
            <span><img src="./images/summary-dropdown.svg" alt=""/></span>
            Full text with highlights
          </ShareDropdownContent>
          <ShareDropdownContent onClick={handleShareSummaryModal}>
            <span><img src="./images/fulltext-dropdown.svg" alt=""/></span>
            Highlight summary
          </ShareDropdownContent>
        </ShareDropdownContentWrapper>
      }
      {shareFullText &&
        <ModalSection
            modalHeaderTitle={ "Share Full Text with Highlights" }
            modalSubHeader={ "Anyone with link can view this page with highlights."}
            copyAddress={ "https://getliner.com/"}
          handleCloseModal={handleShareFullTextModal}
        />
      }
      {shareSummary &&
        <ModalSection
            modalHeaderTitle={ "Share Highlight Summary" }
            modalSubHeader={ "Anyone with link can view this page with highlights."}
            copyAddress={ "https://getliner.com/"}
          handleCloseModal={handleShareSummaryModal}
        />
      }
    </ShareDropdownContainer>
  )
}

export default ShareDropdown;

 const ShareDropdownContainer = styled.div`
display: inline-block;
top: 400px;
backgroubd-color: #fff;
`;

const ShareDropdownButton = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-image: url("/images/share-header.svg");
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

 const ShareDropdownContentWrapper = styled.div`
position: absolute;
min-width: 200px;
padding: 8px 0;
border: 1px solid #DDE1E6;
border-radius: 8px;
background-color: #fff;
z-index: 999;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
`;
 const ShareDropdownContent = styled.div`
width: 100%;
height: 40px;
font-size: 15px;
padding: 8px 10px;
display: flex;
align-items: center;
color: #787d86;
border-radius: 5px;
span {
  display: flex;
  padding-right: 5px;
  align-items: center;
}
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;