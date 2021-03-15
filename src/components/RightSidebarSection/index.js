import React from 'react';
import AddLinerSection from '../atoms/AddLinerSection';
import {
  RightSidebarContainer,
} from './RightSidebarElements';
import KeyWordsSection from '../atoms/KeyWordsSection';
import RecommandPages from '../atoms/RecommandPagesSection'
import SidebarFooter from '../atoms/SidebarFooterSection'


export const RightSidebarSection = () => {

  return (
  <>
    <RightSidebarContainer>
      <AddLinerSection />
      <KeyWordsSection />
      <RecommandPages />
      <SidebarFooter />
    </RightSidebarContainer>
    
  </>
  )
}

export default RightSidebarSection;