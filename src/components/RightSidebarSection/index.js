import React from 'react';
import AddLinerSection from '../atoms/AddLinerSection';
import {
  RightSidebarContainer,
} from './RightSidebarElements';
import KeyWordsSection from '../atoms/KeyWordsSection'

export const RightSidebarSection = () => {

  return (
  <>
    <RightSidebarContainer>
        <AddLinerSection />
        <KeyWordsSection />
      {/* 
      <RecommandPages>
        <div>
          Trending Pages
        </div>
        <SpreadPageContents />
      </RecommandPages> */}
      
    </RightSidebarContainer>
    {/* <Footer /> */}
  </>
  )
}

export default RightSidebarSection;