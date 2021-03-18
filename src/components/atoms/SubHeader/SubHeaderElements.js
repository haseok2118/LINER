import styled from '@emotion/styled';

export const SubHeaderContainer = styled.div`
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
color: #787d86;
`;
export const SubHeaderTab = styled.div`
height: 100%;
display: flex;
align-items: center;
a {
  height: 100%;
  border-radius: 8px;
  padding:10px 15px;
  :hover {
    background-color: #EDF1F4;
    cursor: pointer;
  }
}
`;
export const SubHeaderButtons = styled.div`
display: flex;
justify-content: flex-end;
`;

export const SearchHighlightsButton = styled.button`
position:relative;
justify-content: center;
align-items:center;
display: flex;
font-size: 15px;
color: #787d86;
border: none;
background-color: #fff;
width: 30px;
height: 30px;
border-radius: 50%;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
  ::after {
    position: absolute;
    content:"Search";
    padding: 1px;
    font-size: 12px;
    background-color: #323235;
    color: #fff;
    top: 32px;
    letter-spacing: 0.8px;
    border-radius: 2px;
  }
:focus {
  outline: none;
}
`;

export const SearchHighlightsBox = styled.div`
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
color: #787d86;
`;

export const SearchHighlightsForm = styled.div`
display: flex;
align-items: center;
width: 100%;
`;

export const SearchHighlightsBar = styled.input`
  flex-grow: 1;
  background-color: #fff;
  width: 100%;
  height: 30px;
  line-hight: 1.2;
  font-size: 14px;
  border: 1px solid #EEF1F4;
  border-radius: 8px;
  margin-left: 20px;
  padding: 0 10px;
  :focus {
    outline:0;
  }
  ::placeholder {
    color: #DDE1E6;
    font-weight: 500;
  }
`;

export const SearchCancelButton = styled.div`
font-size: 15px;
margin-left: 35px;
padding: 10px 10px;
border-radius: 8px;
:hover {
  background-color: #EEF1F4;
  cursor: pointer;
}
`;