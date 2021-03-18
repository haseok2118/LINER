import React, { useState } from 'react';
import {
  MyHighlightsContainer,
  MyHighlightsWrapper,
  MyHighlightsHeader,
  MyHighlightsHeaderTitle,
  MyHighlightsSubTitle,
} from './MyHighlightsElements';
import Data from '../../Data';
import SubHeader from '../SubHeaderSection';
import RightSidebarSection from '../RightSidebarSection';
import MyHighlightsContents from './MyHighlightsContents';

export const MyHightlightsSection = () => {
  const [modalOpen, setModalOpen] = useState({
    shareDropdown: false,
    shareDotDropdown: false,
    shareFullText: false,
    shareSummary: false,
    send: false,
    editFile: false,
    trash: false,
  });
  const { shareDropdown, shareDotDropdown, shareFullText, shareSummary, send, editFile, trash, } = modalOpen;

  const handleShareDropdown = () => {
    setModalOpen({
      ...modalOpen,
      shareDropdown: !modalOpen.shareDropdown
    });
  };
  const handleShareDotDropdown = () => {
    setModalOpen({
      ...modalOpen,
      shareDotDropdown: !modalOpen.shareDotDropdown
    });
  };
  const handleShareFullTextModal = () => {
    setModalOpen({
      ...modalOpen,
      shareFullText: !modalOpen.shareFullText,
      shareDropdown: !modalOpen.shareDropdown
    });
  };
  const handleShareSummaryModal = () => {
    setModalOpen({
      ...modalOpen,
      shareSummary: !modalOpen.shareSummary,
      shareDropdown: !modalOpen.shareDropdown
    });
  };
  const handleSendModal = () => {
    setModalOpen({
      ...modalOpen,
      send: !modalOpen.send,
      shareDotDropdown: !modalOpen.shareDotDropdown
    });
  };
  const handleEditFileModal = () => {
    setModalOpen({
      ...modalOpen,
      editFile: !modalOpen.editFile,
      shareDotDropdown: !modalOpen.shareDotDropdown
    });
  };
  const handleTrashModal = () => {
    setModalOpen({
      ...modalOpen,
      trash: !modalOpen.trash,
      shareDotDropdown: !modalOpen.shareDotDropdown
    });
  };

  return (
    <MyHighlightsContainer>
      <MyHighlightsWrapper>
        <MyHighlightsHeader>
          <MyHighlightsHeaderTitle>
            My Highlights
            <div id="for-you-info">
              <img src="./images/info.svg" alt="" />
            </div>
          </MyHighlightsHeaderTitle>
        </MyHighlightsHeader>
        <MyHighlightsSubTitle>
          <div>{`${Data.savedData.length} Pages`}</div>
          <div>0 Highlights</div>
        </MyHighlightsSubTitle>
        <SubHeader />
        <MyHighlightsContents
          handleShareDropdown={handleShareDropdown}
          handleShareDotDropdown= {handleShareDotDropdown}
          handleShareFullTextModal={handleShareFullTextModal}
          handleShareSummaryModal={handleShareSummaryModal}
          handleSendModal={handleSendModal}
          handleEditFileModal={handleEditFileModal}
          handleTrashModal={handleTrashModal}
          shareDropdown={shareDropdown}
          shareDotDropdown={shareDotDropdown}
          shareFullText={shareFullText}
          shareSummary={shareSummary}
          send={send}
          trash={trash}
          editFile={editFile}
        />
      </MyHighlightsWrapper>
      <RightSidebarSection />
    </MyHighlightsContainer>
  )

}
export default MyHightlightsSection;
