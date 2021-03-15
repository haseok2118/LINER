import React from 'react';
import styled from '@emotion/styled';

const SidebarFooter = () => {
  return (
    <SidebarFooterContainer>
      <FooterContents>
        <a href="#">Terms & Privacy</a>
        <a href="#">Support</a>
        <a href="#">Mobile Apps</a>
        <a href="#">Browser Extensions</a>
      </FooterContents>
      <FooterCorp>LINER © 2021</FooterCorp>
    </SidebarFooterContainer>
  )
}

export default SidebarFooter;

const SidebarFooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 320px;
padding: 15px 15px;
background-color: #fff;
float: right;
`;
const FooterContents = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
padding: 10px 10px;
a {
  font-size: 12px;
  color: #b0b4bd;
  margin: 0 30px 10px 0;
}
`;
const FooterCorp = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding:0 20px;
color: #b0b4bd;
font-size: 12px;
`;
