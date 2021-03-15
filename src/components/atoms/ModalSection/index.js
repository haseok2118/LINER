import React from 'react'
import {
  ModalHeaderWrapper,
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from './ModalElement'

const ModalSection = ({handleCloseModal}) => {

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeaderWrapper>
          <ModalHeader>
            <div>Share Original Page</div>
            <span onClick={handleCloseModal}>
              <img src="close-light.svg" alt="" ></img>
            </span>
          </ModalHeader>
        </ModalHeaderWrapper>
        <ModalContent>
          <div>
            <a href="#"><img src="facebook.svg" alt="" /></a>
            <a href="#"><img src="twitter.svg" alt="" /></a>
            <a href="#"><img src="linkdin.svg" alt="" /></a>
            <a href="#"><img src="messenger.svg" alt="" /></a>
            <a href="#"><img src="line.svg" alt="" /></a>
            <a href="#"><img src="mail.svg" alt="" /></a>
          </div>
        </ModalContent>
        <ModalFooter>
          <div>https://www.getliner.com/foryou/posts/7GdseythMSDG65485asgcb659SDGB</div>
          <button>Copy</button>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  )
}

export default ModalSection