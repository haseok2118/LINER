import styled from '@emotion/styled';

export const LeftSidebarContainer = styled.div`
width: 216px;
position: fixed;
display: flex;
flex-direction: column;
min-height: 200px;
top: 98px;
justify-content: center;

`;

export const Tab = styled.a`
width: 100%;
height: 51px;
display: flex;
align-items: center;
font-size: 16px;
font-weight: 400;
color: #81868F;
border-radius: 8px;
letter-spacing: 1px;
line-height: center;
text-decoration: none;
:hover {
  background-color: #F5F8FA;
  cursor: pointer;
}
`;

export const Button = styled.button`
width: 100%;
height: 40px;
margin-top: 20px;
border: 1px solid #02BDB8;
border-radius: 8px;
background-color: #fff;
color: #02BDB8;
font-size: 16px;
font-weight: 500;
:hover {
  background-color: #02BDB8;
  cursor: pointer;
  color: #fff;
}
`;