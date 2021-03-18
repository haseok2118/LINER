import React from 'react';
import styled from '@emotion/styled';

const SendModal = ({ handleSendModal }) => {

  return (
    <SendModalContainer>
      <SendModalBox>
        <SendModalHeaderWrapper>
          <SendModalHeader>
            <div>Export</div>
            <span onClick={handleSendModal}>
              <img src="./images/close-light.svg" alt="" ></img>
            </span>
          </SendModalHeader>
          <SendModalSubHeader>Export your highlights</SendModalSubHeader>
        </SendModalHeaderWrapper>
        <SendModalContentContainer>
          <SendModalContent>
            <a href="#"><img src="./images/word.svg" alt="" /></a>
            <span>Word</span>
          </SendModalContent>
          <SendModalContent>
            <a href="#"><img src="./images/onenote.svg" alt="" /></a>
            <span>OneNote</span>
          </SendModalContent>
          <SendModalContent>
            <a href="#"><img src="./images/evernote.svg" alt="" /></a>
            <span>Evernote</span>
          </SendModalContent>
          <SendModalContent>
            <a href="#"><img src="./images/text.svg" alt="" /></a>
            <span>Text</span>
          </SendModalContent>
        </SendModalContentContainer>
      </SendModalBox>
    </SendModalContainer>
  )
}

export default SendModal;

const SendModalContainer = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
left: 0;
top:0;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
overflow: hidden;
`;

const SendModalBox = styled.div`
width: 480px;
min-height: 200px;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
padding: 20px;
opacity: 1;
`;

const SendModalHeaderWrapper = styled.div`
width: 100%;
`;
const SendModalHeader = styled.div`
display: flex;
justify-content: space-between;
justify-self: center;
align-items: center;
padding: 0 5px;
div {
  diaplay: inline-block;
  font-size: 28px;
  font-weight: 800;
}
span {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #EEF1F4;
    cursor: pointer;
  }
}
`;
const SendModalSubHeader = styled.div`
padding: 0 5px;
margin-top: 5px;
color: #787d86;
`;

const SendModalContentContainer = styled.div`
width: 100%;
flex-grow: 1;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 5px;
`;

const SendModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #787d86;
font-size: 13px;
margin-right: 10px;
a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 5px;
  :hover {
    opacity: 0.7;
  }
}
`