import React from 'react'
import {
  LeftSidebarContainer,
  Tab,
  Button,
} from './LeftSidebarElements'


export const LeftSidebarSection = () => {
  return (
    <LeftSidebarContainer>
      <Tab href="#">For You</Tab>
      <Tab href="#">My Hightlights</Tab>
      <Tab href="#">More</Tab>
      <Button>Upgrade</Button>
    </LeftSidebarContainer>
  )
}

export default LeftSidebarSection;