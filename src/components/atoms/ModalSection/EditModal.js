import React from 'react';
import styled from '@emotion/styled';

const EditModal = ({ handleEditFileModal }) => {

  return (
    <EditModalContainer>
      <EditModalBox>
        <EditModalHeaderWrapper>
          <EditModalHeader>
            <div>Edit Title</div>
            <span onClick={handleEditFileModal}>
              <img src="./images/close-light.svg" alt="" />
            </span>
          </EditModalHeader>
        </EditModalHeaderWrapper>
        <EditModalContentContainer>
          <EditModalInput />
        </EditModalContentContainer>
        <EditModalButtonContainer>
          <CancelButton
            onClick={handleEditFileModal}>
            Cancel
          </CancelButton>
          <SaveButton>Save</SaveButton>
        </EditModalButtonContainer>
      </EditModalBox>
    </EditModalContainer>
  )
}

export default EditModal;

const EditModalContainer = styled.div`
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

const EditModalBox = styled.div`
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

const EditModalHeaderWrapper = styled.div`
width: 100%;
`;
const EditModalHeader = styled.div`
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

const EditModalContentContainer = styled.div`
width: 100%;
flex-grow: 1;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 5px;
`;
const EditModalInput = styled.input`
width: 100%;
align-items: center;
padding: 10px 5px;
font-size: 18px;
background-color: #EEF1F4;
border: none;
border-radius: 8px;
:focus {
  outline: none;
}
`;
const EditModalButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 5px;
`;

const CancelButton = styled.div`
font-size: 18px;
padding: 10px 10px;
border-radius: 8px;
color: #787d86;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;
const SaveButton = styled.div`
font-size: 18px;
padding: 10px 10px;
border-radius: 8px;
font-weight: 600;
color: #3DBDB8;
margin-left: 10px;
:hover {
  background-color: #b7e5e3;
  cursor: pointer;
}
`;