import styled from '@emotion/styled';

export const ModalContainer = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
left: 0;
top:0;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
overflow: hidden;
`;

export const ModalBox = styled.div`
width: 480px;
min-height: 250px;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
padding: 20px;
opacity: 1;
`;

export const ModalHeaderWrapper = styled.div`
width: 100%;
flex-grow: 1;

`;
export const ModalHeader = styled.div`
display: flex;
justify-content: space-between;
justify-self: center;
align-items: center;
padding: 0 5px;
div {
  diaplay: inline-block;
  font-size: 28px;
  font-weight: 800;
}
span {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #EEF1F4;
    cursor: pointer;
  }
}
`;
export const ModalSubHeader = styled.div`
padding: 0 5px;
margin-top: 5px;
color: #787d86;
`;

export const ModalContent = styled.div`
width: 100%;
flex-grow: 2;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 5px;
margin-bottom: 15px;
div{
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #fff;
    :hover {
      opacity: 0.7;
    }
  }

}
  
`;
export const ModalFooter = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 36px;
flex-grow: 1;
border-top: 1px solid #DDE1E6;

div {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}
button {
  width: 20%;
  height: 32px;
  font-size: 17px;
  font-weight: 650;
  letter-spacing: 1px;
  border: none;
  border-radius: 8px;
  margin-left: 30px;
  color: #00bdb8;
  background-color: #fff;
  :hover {
    background-color: #b5f5f2cc;
  }
}
`;