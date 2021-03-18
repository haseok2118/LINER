import styled from '@emotion/styled';

export const DetailNavbarContainer = styled.div`
position: sticky;
top: 64px;
width: 680px;
display: flex;
justify-content: space-between;
align-items: center;
color: #787d86;
background-color: #fff;
z-index: 10;
`;

export const DetailNavbarTab = styled.div`
display: flex;
align-items: center;
width: 28px;
height: 28px;
button {
  border: none;
  border-radius: 50%;
  padding:15px 15px;
  background-image: url("/images/back-header.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 1px;
  background-color: #fff;
  :hover {
    background-color: #EDF1F4;
    cursor: pointer;
  }
}
`;
export const DetailNavbarButtons = styled.div`
display: flex;
justify-content: flex-end;
`;
export const ShareModal = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 28px;
height: 28px;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Share";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 30px;
    left: 0;
    letter-spacing: 0.8px;
    border-radius: 3px;
  }
`;