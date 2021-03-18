import React from 'react';
import styled from '@emotion/styled';
import ModalSection from '../atoms/ModalSection'
import DotButtonDropdown from '../atoms/DropdownSection/DotButtonDropdown';

const MyHighlightsContents = ({
  modalOpen,
  handleOpenShareModal
}) => {

  return (
    <MyHighlightsContentsContainer>
      <MyHighlightsContentsWrapper>
        <MyHighlightsContentsBox>
          <h2>love love love</h2>
          <p>19. Reward yourself after completing challenges, even badly</p>
        </MyHighlightsContentsBox>
        <MyHighlightsContentsImage src="" alt=""/>
      </MyHighlightsContentsWrapper>
      <MyHighlightsContentsBottomNavbar>
        <MyHighlightsContentsSourceContainer>
          <img src="" alt="" width="20px" height="20px" />
          <div>www.nanana.com</div>
        </MyHighlightsContentsSourceContainer>
        <MyHighlightsContentsBoxContainer>
          <ShareModal onClick={handleOpenShareModal}>
            <img src="share-header.svg" alt="" />
          </ShareModal>
          {modalOpen && <ModalSection handleCloseModal={handleOpenShareModal} />}
          <DotButtonDropdown />
        </MyHighlightsContentsBoxContainer>
      </MyHighlightsContentsBottomNavbar>
    </MyHighlightsContentsContainer>
  )
}

export default MyHighlightsContents;


const MyHighlightsContentsContainer = styled.div`
width: 680px;
padding-top: 16px;
display: flex;
flex-direction: column;
`;
const MyHighlightsContentsWrapper = styled.div`
width: 100%;
display: flex;
margin-bottom: 25px;
`;
const MyHighlightsContentsBox = styled.div`
width: 570px;
p {
  margin-top: 10px;
  font-weight: 350;
}
`;
const MyHighlightsContentsImage = styled.div`
width:96px;
height: 96px;
margin-left: 14px;
background-color: #787d86;
:hover {
  cursor: pointer;
  opacity: 0.8;
}
`;
const MyHighlightsContentsBottomNavbar = styled.div`
display:flex;
height: 48px;
align-items: center;
padding-bottom: 16px;
justify-content: space-between;
border-bottom: 1px solid #eef1f4;
`;
const MyHighlightsContentsSourceContainer = styled.div`
display:flex;
align-items: center;
div {
  margin-left: 5px;
  font-size: 14px;
}
`;
const MyHighlightsContentsBoxContainer = styled.div`
display:flex;
width: 96px;
align-items: center;
justify-content: space-evenly;
`;
const ShareModal = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 30px;
height: 30px;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Share";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 30px;
    left: 0;
    letter-spacing: 0.8px;
    border-radius: 3px;
  }
`;