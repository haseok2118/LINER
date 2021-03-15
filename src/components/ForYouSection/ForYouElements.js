import styled from '@emotion/styled';

export const ForYouSectionContainer = styled.div`
width: 1064px;
height: 100%;
margin-top: 34px;
margin-left: 216px;
padding-left:30px;
display:flex;
`;
export const ForYouSectionWrapper = styled.div`
width: 680px;
height: 100%;
`;

export const ForYouSectionHeader = styled.div`
position: static;
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const ForYouHeaderTitle = styled.div`
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
export const ForYouHeaderDropdown = styled.div`
display: flex;
align-items: center;
color: #787d86;
`;

export const ForYouSectionSubHeader = styled.div`
margin: 20px 0;
color: #787d86;
`;

export const ArrowForClosingFilter = styled.img`
display: none;
margin: 0;
width: 16px;
height: 16px;
`;
export const ArrowForOpeningFilter = styled.img`
display: block;
margin: 0;
width: 16px;
height: 16px;
`;