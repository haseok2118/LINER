import styled from '@emotion/styled';

export const AddLinerContainer = styled.div`
display: flex;
flex-direction: column;
width: 320px;
padding: 15px 15px;
border: 1px solid #dde1e7;
border-radius: 12px;
float: right;
margin-bottom: 16px;
`;

export const AddLinerContent = styled.div`
display: flex;
justify-content: space-between;
  .add-liner-content-box {
    div {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #52565d;
    }
    p {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 16px;
      color: #787d86;
      letter-spacing: .8px;
    }
  }
  .add-liner-image {
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
    background-image: url("/public/add-liner.svg");
    
  }
`;

export const AddLinerButton = styled.button`
display: block;
text-align: right;
background-color: #fff;
border: none;
color: #00bdb8;
font-size: 15px;
font-weight: 500;
:hover {
  cursor: pointer;
  opacity: 0.8;
}
`;