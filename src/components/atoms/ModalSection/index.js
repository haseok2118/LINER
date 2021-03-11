import React from 'react'
import {
  ModalHeaderWrapper,
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from './ModalElement'

const ModalSection = () => {

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeaderWrapper>
          <ModalHeader>
            <div>Share Original Page</div>
            <span>
              <img src="" alt="" ></img>
            </span>
          </ModalHeader>
        </ModalHeaderWrapper>
        <ModalContent>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
          
        </ModalContent>
        <ModalFooter>
          <div></div>
          <button></button>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  )
}

export default ModalSection