import React from 'react'
import styled from '@emotion/styled';
import SendModal from '../ModalSection/SendModal';
import EditModal from '../ModalSection/EditModal';
import DeleteModal from '../ModalSection/DeleteModal';

const DotShareDropdown = ({
  shareDotDropdown,
  send,
  trash,
  editFile,
  handleShareDotDropdown,
  handleSendModal,
  handleEditFileModal,
  handleTrashModal,
}) => {
 
  return (
    <DotShareDropdownContainer>
      <DotShareDropdownButton  onClick={handleShareDotDropdown}>
        <img src="./images/more-light.svg" alt="" />
      </DotShareDropdownButton>
      {
        shareDotDropdown &&
      <DotShareDropdownContentWrapper>
        <DotShareDropdownContent onClick={handleSendModal}>
          <span><img src="./images/export-dropdown.svg" alt=""/></span>
          Export
        </DotShareDropdownContent>
        <DotShareDropdownContent onClick={handleEditFileModal}>
          <span><img src="./images/edit-header.svg" alt=""/></span>
          Edit Title
        </DotShareDropdownContent>
        <DotShareDropdownContent>
          <span><img src="./images/original-dropdown.svg" alt=""/></span>
          View Original
        </DotShareDropdownContent>
        <DotShareDropdownContent onClick={handleTrashModal}>
          <span><img src="./images/delete-tooltip.svg" alt=""/></span>
          Move to trash
        </DotShareDropdownContent>
      </DotShareDropdownContentWrapper>
      }
      {send && <SendModal handleSendModal={handleSendModal} />}
      {editFile && <EditModal handleEditFileModal={handleEditFileModal} />}
      {trash && <DeleteModal handleTrashModal={ handleTrashModal }/>}
    </DotShareDropdownContainer>
  )
}

export default DotShareDropdown;

 const DotShareDropdownContainer = styled.div`
display: inline-block;
top: 400px;
backgroubd-color: #fff;
`;

const DotShareDropdownButton = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"More";
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

 const DotShareDropdownContentWrapper = styled.div`
position: absolute;
min-width: 200px;
padding: 8px 0;
border: 1px solid #DDE1E6;
border-radius: 8px;
background-color: #fff;
z-index: 999;
box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
`;
 const DotShareDropdownContent = styled.div`
width: 100%;
height: 40px;
font-size: 15px;
padding: 8px 8px;
color: #787d86;
display: flex;
align-items: center;
border-radius: 5px;
span {
  display: flex;
  padding: 10px;
  align-items: center;
}
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;