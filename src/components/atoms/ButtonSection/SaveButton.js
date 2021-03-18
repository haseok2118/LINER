import React from 'react'
import styled from '@emotion/styled';

const SaveButton = ({handleClickSaveButton}) => {
  return (
    <SaveButtonContainer onClick={handleClickSaveButton} />
  )
}
export default SaveButton;

const SaveButtonContainer = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-image: url("/images/save.svg");
background-size: cover;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Save";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 30px;
    left: 0;
    letter-spacing: 0.8px;
    border-radius: 3px;
  }
}
`;
