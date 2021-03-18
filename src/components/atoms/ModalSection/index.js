import React from 'react'
import {
  ModalHeaderWrapper,
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalSubHeader,
  ModalContent,
  ModalFooter,
} from './ModalElement'

const ModalSection = ({
  modalHeaderTitle,
  modalSubHeader,
  copyAddress,
  handleCloseModal }) => {

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeaderWrapper>
          <ModalHeader>
            <div>{ modalHeaderTitle }</div>
            <span onClick={handleCloseModal}>
              <img src="./images/close-light.svg" alt="" ></img>
            </span>
          </ModalHeader>
          <ModalSubHeader>{ modalSubHeader }</ModalSubHeader>
        </ModalHeaderWrapper>
        <ModalContent>
          <div>
            <a href="#"><img src="./images/facebook.svg" alt="" /></a>
            <a href="#"><img src="./images/twitter.svg" alt="" /></a>
            <a href="#"><img src="./images/linkdin.svg" alt="" /></a>
            <a href="#"><img src="./images/messenger.svg" alt="" /></a>
            <a href="#"><img src="./images/line.svg" alt="" /></a>
            <a href="#"><img src="./images/mail.svg" alt="" /></a>
          </div>
        </ModalContent>
        <ModalFooter>
          <div>{copyAddress}</div>
          <button>Copy</button>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  )
}

export default ModalSection