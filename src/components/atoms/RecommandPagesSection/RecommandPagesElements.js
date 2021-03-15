import styled from '@emotion/styled';

export const RecommandPagesContainer = styled.div`
width: 320px;
background-color: #f6f8fa;
border: none;
border-radius: 12px;
float: right;
`;

export const RecommandPagesTitle = styled.div`
font-size: 16px;
font-weight: 700;
color: #969aa2;
border-bottom: 1px solid #dde1e7;
padding:16px 16px 12px 16px;
`;
export const RecommandPagesContentWrapper = styled.div`
width: 100%;
`;
export const RecommandPagesContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
a {
  max-width: 320px;
  font-size: 16px;
  color: #555;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  line-height: 1.2;
}
div {
  margin-top: 10px;
  color: #969aa2;
  font-size: 12px;
  font-weight: 500;
  padding: 0 10px 5px;
}
:hover{
  cursor: pointer;
  background-color: #b3b7b85e;
}
`;

export const ShowMoreButton = styled.div`
width: 100%;
height: 40px;
display: flex;
color: #00bdb8;
justify-content: center;
align-items: center;
:hover{
  cursor: pointer;
  background-color: #b3b7b85e;
}
`;