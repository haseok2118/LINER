import React from 'react';
import styled from '@emotion/styled';
import ShareDropdown from '../atoms/DropdownSection/ShareDropdown';
import DotShareDropdown from '../atoms/DropdownSection/DotShareDropdown';

const MyHighlightsContents = ({
  shareDropdown,
  shareDotDropdown,
  shareFullText,
  shareSummary,
  send,
  trash,
  editFile,
  handleShareDropdown,
  handleShareDotDropdown,
  handleShareFullTextModal,
  handleShareSummaryModal,
  handleSendModal,
  handleEditFileModal,
  handleTrashModal,
}) => {

  return (
    <MyHighlightsContentsContainer>
      <MyHighlightsContentsWrapper>
        <MyHighlightsContentsBox>
          <h2>the truth</h2>
          <p>there is nothing</p>
        </MyHighlightsContentsBox>
        <MyHighlightsContentsImage src="" alt=""/>
      </MyHighlightsContentsWrapper>
      <MyHighlightsContentsBottomNavbar>
        <MyHighlightsContentsSourceContainer>
          <img src="" alt="" width="20px" height="20px" />
          <div>www.has.com</div>
        </MyHighlightsContentsSourceContainer>
        <MyHighlightsContentsBoxContainer>
          <ShareDropdown
            shareDropdown={shareDropdown}
            shareFullText = {shareFullText}
            shareSummary={shareSummary}
            handleShareDropdown={handleShareDropdown}
            handleShareFullTextModal = { handleShareFullTextModal }
            handleShareSummaryModal = {handleShareSummaryModal}
            />
          <DotShareDropdown
            shareDotDropdown={shareDotDropdown}
            send={send}
            trash={trash}
            editFile={editFile}
            handleShareDotDropdown={handleShareDotDropdown}
            handleSendModal={handleSendModal}
            handleEditFileModal={handleEditFileModal}
            handleTrashModal={handleTrashModal}
          />
          
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
