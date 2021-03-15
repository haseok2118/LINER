import React from 'react';
import styled from '@emotion/styled';

export const KeyWordsSection = () => {
  return (
    <KeyWordsContainer>
      <KeyWordsTitle>
        Trending Keywords
      </KeyWordsTitle>
      <SpreadKeyWords>
        <a href="#">#video</a>
        <a href="#">#video</a>
        <a href="#">#video</a>
        <a href="#">#sharing</a>
        <a href="#">#video</a>
        <a href="#">#video</a>
        <a href="#">#video</a>
      </SpreadKeyWords>
    </KeyWordsContainer>
  )
}

export default KeyWordsSection;

const KeyWordsContainer = styled.div`
width: 320px;
background-color: #f6f8fa;
border: none;
border-radius: 12px;
padding: 16px 16px;
float: right;
margin-bottom: 16px;
`;

const KeyWordsTitle = styled.div`
font-size: 16px;
font-weight: 700;
color: #969aa2;
border-bottom: 1px solid #dde1e7;
padding-bottom: 12px;
`;

const SpreadKeyWords = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 12px;
a {
  font-size: 16px;
  color: #555;
  text-decoration: none;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  :hover{
    cursor: pointer;
    color: #00bdb8;
    background-color: #F5F8FA;
  }
}
`;