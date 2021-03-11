import styled from '@emotion/styled';

export const ModalContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #B2B2B2;
display: flex;
justify-content: center;
align-items: center;
z-index: 99;
`;

export const ModalBox = styled.div`
width: 480px;
min-height: 200px;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
padding: 20px;
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
`;
export const ModalContent = styled.div`
width: 100%;
flex-grow: 2;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 5px;
div{
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: beige;
  }

}
  
`;
export const ModalFooter = styled.div`
width: 100%;
height: 36px;
flex-grow: 1;
border-top: 1px solid #DDE1E6;
`;