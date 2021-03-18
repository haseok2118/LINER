import React, { useState } from 'react';
import {
  ForYouDetailContainer,
  ForYouDetailWrapper,
  ForYouDetailHeader,
  ForYouDetailContentDecp,
  ForYouDetailContentContainer,
  ForYouDetailContentDecpFooter,
  ViewOriginalButton,
  ForYouMoreContentContainer,
  ForYouMoreContentHeader
} from './ForYouDetailElements';
import DetailNavbarSection from '../DetailNavbarSection'

export const ForYouDetailSection = () => {

  return (
    <>
    
    <ForYouDetailContainer>
      <DetailNavbarSection />
      <ForYouDetailWrapper>
        <ForYouDetailHeader>
          
          <img src="/images/likeyouto.jpeg" alt="" />
        </ForYouDetailHeader>
          <ForYouDetailContentContainer>
            <ForYouDetailContentDecp>
              How To get Happiness
              <ForYouDetailContentDecpFooter>
                <img src="" alt="" width="20px" height="20px" />
                <div>www.getliner.com</div>
              </ForYouDetailContentDecpFooter>
            </ForYouDetailContentDecp>
            <ViewOriginalButton href="https://getliner.com/home">View Original</ViewOriginalButton>
          </ForYouDetailContentContainer>
          <ForYouMoreContentContainer>
            <ForYouMoreContentHeader>
              More Like This
            </ForYouMoreContentHeader>

          </ForYouMoreContentContainer>
      </ForYouDetailWrapper>
    </ForYouDetailContainer>
    </>
  )
}

export default ForYouDetailSection;