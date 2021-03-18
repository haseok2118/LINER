import React from 'react';
import styled from '@emotion/styled';

const SaveFilledButton = ({handleClickSaveButton}) => {
  return (
    <SaveFilledButtonContainer onClick={handleClickSaveButton} />
  )
}
export default SaveFilledButton;

const SaveFilledButtonContainer = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-image: url("/images/save-fill.svg");
background-size: cover;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Saved";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 30px;
    left: -1px;
    letter-spacing: 0.8px;
    border-radius: 3px;
  }
}
`;