import React, { useState } from 'react';
import {
  MyHighlightsContainer,
  MyHighlightsWrapper,
  MyHighlightsHeader,
  MyHighlightsHeaderTitle,
  MyHighlightsSubTitle,
} from './MyHighlightsElements';
import Data from '../../Data';
import SubHeader from '../atoms/SubHeader';
import RightSidebarSection from '../RightSidebarSection';
import MyHighlightsContents from './MyHighlightsContents';

export const MyHightlightsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenShareModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MyHighlightsContainer>
      <MyHighlightsWrapper>
        <MyHighlightsHeader>
          <MyHighlightsHeaderTitle>
            My Highlights
            <div id="for-you-info">
              <img src="info.svg" alt="" />
            </div>
          </MyHighlightsHeaderTitle>
        </MyHighlightsHeader>
        <MyHighlightsSubTitle>
          <div>{`${Data.savedData.length} Pages`}</div>
          <div>0 Highlights</div>
        </MyHighlightsSubTitle>
        <SubHeader />
        <MyHighlightsContents
          handleOpenShareModal={handleOpenShareModal}
          modalOpen={modalOpen}
        />
      </MyHighlightsWrapper>
      <RightSidebarSection />
    </MyHighlightsContainer>
  )

}
export default MyHightlightsSection;
