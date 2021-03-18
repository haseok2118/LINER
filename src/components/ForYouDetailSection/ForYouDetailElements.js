import styled from '@emotion/styled';

export const ForYouDetailContainer = styled.div`
width: 1064px;
height: 100%;
margin-left: 216px;
padding-left:30px;
`;
export const ForYouDetailWrapper = styled.div`
width: 680px;
height: 100%;
`;

export const ForYouDetailHeader = styled.div`
position: static;
width: 100%;
height: 240px;
border-radius: 4px;
display: flex;
justify-content: center;
background-color: #F5F8FA;
img {
  width: 680px;
  height: 240px;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0.7;
}
`;

export const ForYouDetailContentContainer = styled.div`
width: 100%;
margin-bottom: 50px;
`;
export const ForYouDetailContentDecp = styled.div`
font-size: 24px;
font-weight: 700;
padding: 20px 0;
border-bottom: 1px solid #eef1f4;
`;
export const ForYouDetailContentDecpFooter = styled.div`
display:flex;
align-items: center;
padding-top: 20px;
div {
  margin-left: 15px;
  font-size: 14px;
  color:#787d86;
}
`;
export const ViewOriginalButton = styled.a`
width: 100%;
height: 48px;
display:flex;
justify-content: center;
align-items: center;
margin-top: 20px;
color:#787d86;
border: 1px solid #DDE1E6;
border-radius: 8px;
outline: none;
cursor: pointer;
text-decoration: none;
:hover {
  background-color: #F5F8FA;
}
`;

export const ForYouMoreContentContainer = styled(ForYouDetailContentContainer)`
width: 100%;
margin-bottom: 50px;
`;
export const ForYouMoreContentHeader = styled(ForYouDetailContentDecp)`
font-size: 24px;
font-weight: 700;
padding: 20px 0;
border-bottom: 1px solid #eef1f4;
`;