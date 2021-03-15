import React from 'react'

const LanguagesDropdown = () => {
  return (
    <LanguagesDropdownContainer>
      <LanguagesDropdownButton>
        Languages
        <ArrowForClosingFilter src="collapse.svg" alt="" />
        <ArrowForOpeningFilter src="expand-grey.svg" alt="" />
      </LanguagesDropdownButton>
      <LanguagesDropdownContentWrapper>
        <LanguagesDropdownContent></LanguagesDropdownContent>
        <LanguagesDropdownContent></LanguagesDropdownContent>
        <LanguagesDropdownContent></LanguagesDropdownContent>
      </LanguagesDropdownContentWrapper>
    </LanguagesDropdownContainer>
  )
}

export default LanguagesDropdown;