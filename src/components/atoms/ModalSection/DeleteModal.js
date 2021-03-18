import React from 'react';
import styled from '@emotion/styled';

const DeleteModal = ({ handleTrashModal }) => {

  return (
    <DeleteModalContainer>
      <DeleteModalBox>
        <DeleteModalHeaderWrapper>
          <DeleteModalHeader>
            <div>Move 1 page to trash</div>
            <span onClick={handleTrashModal}><img src="./images/close-light.svg" alt="" /></span>
          </DeleteModalHeader>
          <DeleteModalSubHeader>You can restore it in the trash.</DeleteModalSubHeader>
        </DeleteModalHeaderWrapper>
        <DeleteModalButtonContainer>
          <CancelButton
            onClick={handleTrashModal}>
            Cancel
          </CancelButton>
          <DeleteButton>Delete</DeleteButton>
        </DeleteModalButtonContainer>
      </DeleteModalBox>
    </DeleteModalContainer>
  )
}

export default DeleteModal;

const DeleteModalContainer = styled.div`
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

const DeleteModalBox = styled.div`
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

const DeleteModalHeaderWrapper = styled.div`
width: 100%;
margin-bottom: 40px;
`;
const DeleteModalHeader = styled.div`
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
const DeleteModalSubHeader = styled.div`
padding: 0 5px;
margin-top: 5px;
color: #787d86;
`;
const DeleteModalButtonContainer = styled.div`
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
const DeleteButton = styled.div`
font-size: 18px;
padding: 10px 10px;
border-radius: 8px;
font-weight: 600;
color: #f35750;
margin-left: 10px;
:hover {
  background-color: #fca5a4;
  cursor: pointer;
}
`;