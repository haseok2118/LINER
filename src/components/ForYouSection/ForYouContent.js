import React from 'react';
import styled from '@emotion/styled';
import ModalSection from '../atoms/ModalSection'
import DotButtonDropdown from '../atoms/DropdownSection/DotButtonDropdown';
import SaveButton from '../atoms/ButtonSection/SaveButton';
import SaveFilledButton from '../atoms/ButtonSection/SaveFilledButton';

const ForYouContent = ({
  Data,
  modalOpen,
  saveClick,
  handleClickSaveButton,
  handleOpenShareModal
}) => {

  return (
    <ForYouContentContainer>
      <ForYouContentWrapper>
        <ForYouContentBox>
          <h2>{ Data.forYouData.title }</h2>
          <p>{ Data.forYouData.story }</p>
        </ForYouContentBox>
        <ForYouContentImage src="" alt=""/>
      </ForYouContentWrapper>
      <ForYouContentBottomNavbar>
        <ForYouContentSourceContainer>
          <img src="" alt="" width="20px" height="20px" />
          <div>{ Data.forYouData.address }</div>
        </ForYouContentSourceContainer>
        <ForYouContentBoxContainer>
          {saveClick &&
            <>
            {/* <p>+ Add tags</p> */}
            <SaveFilledButton handleClickSaveButton={handleClickSaveButton} />
            </>
          }
          {!saveClick && < SaveButton handleClickSaveButton={handleClickSaveButton}/>}
          <ShareModal onClick={handleOpenShareModal}>
            <img src="./images/share-header.svg" alt="" />
          </ShareModal>
          {modalOpen && <ModalSection handleCloseModal={handleOpenShareModal} />}
          <DotButtonDropdown />
        </ForYouContentBoxContainer>
      </ForYouContentBottomNavbar>
    </ForYouContentContainer>
  )
}

export default ForYouContent;


const ForYouContentContainer = styled.div`
width: 680px;
padding-top: 16px;
display: flex;
flex-direction: column;
`;
const ForYouContentWrapper = styled.div`
width: 100%;
display: flex;
margin-bottom: 25px;
`;
const ForYouContentBox = styled.div`
width: 570px;
p {
  margin-top: 10px;
  font-weight: 350;
}
`;
const ForYouContentImage = styled.div`
width:96px;
height: 96px;
margin-left: 14px;
background-color: #787d86;
:hover {
  cursor: pointer;
  opacity: 0.8;
}
`;
const ForYouContentBottomNavbar = styled.div`
display:flex;
height: 48px;
align-items: center;
padding-bottom: 16px;
justify-content: space-between;
border-bottom: 1px solid #eef1f4;
`;
const ForYouContentSourceContainer = styled.div`
display:flex;
align-items: center;
div {
  margin-left: 5px;
  font-size: 14px;
}
`;
const ForYouContentBoxContainer = styled.div`
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