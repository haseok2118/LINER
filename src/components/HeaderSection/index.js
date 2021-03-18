import React, {useState} from 'react'
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  RightButtonContainer,
  AlertButton,
  UploadButton,
  Search,
  Input,
  SearchButton
} from './HeaderElements'

const HeaderSection = () => {
  const [open, setOpen] = useState(false);
  const handleModalStatus = () => {
    setOpen(!open)
  }
  return (
    <>
    <HeaderContainer>
      <HeaderWrapper>
        <Logo href="#">
          {/* <img src="logo.png"/> */}
        </Logo>
        <Search>
          <Input type="text"  placeholder="Search on LINER" />
          <SearchButton />
        </Search>
        <RightButtonContainer>
          <AlertButton >
          </AlertButton>
          <UploadButton onClick={handleModalStatus}>
              <img src="./images/add-highlights.svg" alt="" />
            PDF
          </UploadButton>
        </RightButtonContainer>
      </HeaderWrapper>
    </HeaderContainer>
    {/* {open && <UploadModal />}
    {!open && <></>} */}
    </>
    
  )
}

export default HeaderSection;