import styled from '@emotion/styled';

export const MyHighlightsContainer = styled.div`
width: 1064px;
height: 100%;
margin-top: 34px;
margin-left: 216px;
padding-left:30px;
display:flex;
`;
export const MyHighlightsWrapper = styled.div`
width: 680px;
height: 100%;
`;

export const MyHighlightsHeader = styled.div`
position: static;
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const MyHighlightsHeaderTitle = styled.div`
display: flex;
font-size: 32px;
font-weight: 750;
line-height: 40x;
div {
  margin-left: 15px;
  align-self: center;
  text-align: center;
  line-height: 30px;
  width: 30px;
  height:30px;
  border-radius: 50%;
  :hover {
    background-color: #F5F8FA;
    cursor: pointer;

  }
}
`;
export const MyHighlightsSubTitle = styled.div`
display: flex;
margin: 20px 0;
color: #787d86;
div {
  margin-right: 30px;
}
`;
