import React from 'react'
import {
  RecommandPagesContainer,
  RecommandPagesTitle,
  RecommandPagesContentWrapper,
  RecommandPagesContent,
  ShowMoreButton,
} from './RecommandPagesElements';
const RecommandPagesData = [
  { title: '100 Ways To Live A Better Life', address: "www.dragosroua.com" },
  { title: '100 Ways To Live A Better Life', address: "www.dragosroua.com" },
  { title: '100 Ways To Live A Better Life', address: "www.dragosroua.com" },
  { title: '100 Ways To Live A Better Life', address: "www.dragosroua.com" },
  {
    title: 'Mac Gyver Tips - Tips, Tricks and Hacks for Doing Everything Better | Lifehacker ace roofy ',
    address: "www.dragosroua.com"
  },
]

export const RecommandPages = () => {
  return (
    <RecommandPagesContainer>
      <RecommandPagesTitle>
        Trending Keywords
      </RecommandPagesTitle>
      <RecommandPagesContentWrapper>
        {
          RecommandPagesData.map(item => (
            <RecommandPagesContent>
              <a href="#">{item.title}</a>
              <div>{item.address}</div>
            </RecommandPagesContent>
          ))
        }
      </RecommandPagesContentWrapper>
      <ShowMoreButton>Show More <img src="./images/expand.svg" alt="" /></ShowMoreButton>
    </RecommandPagesContainer>
  )
}

export default RecommandPages;