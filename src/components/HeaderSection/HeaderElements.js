import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
position: sticky;
top:0;
  width: 1280px;
  height:64px;
  background-color: #FFFFFF;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;

`
export const Logo = styled.a`
  width: 36px;
  height: 36px;
  background-image: url("liner-logo.svg");
  background-size: cover;
  border-radius: 8px;
  align-self: center;
`;
export const Search = styled.div`
  display: flex;
  width: 680px;
  border-radius: 8px;
  background-color: #EEF1F4;
  
`;

export const Input = styled.input`
  background-color: #EEF1F4;
  width: 680px;
  line-hight: 1.2;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  :focus {
    outline:0;
  }
  ::placeholder {
    color: #C6C9CB;
    font-weight: 500;
  }
`;

export const SearchButton = styled.span`
background-image: url('/src/images/search.png');
`;

export const RightButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AlertButton = styled.button`
position: relative;
  width: 32px;
  height: 32px;
  border: none;
  background-color: #fff;
  background-image: url('noti.svg');
  background-size: cover;
  margin-right: 10px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    background-color: #F5F8FA;
    ::after {
      position: relative;
      content:"Notification";
      padding: 1px;
      font-size: 12px;
      background-color: #323235;
      color: #fff;
      top: 23px;
      letter-spacing: 0.8px;
      border-radius: 2px;
    }
  }
`;
export const UploadButton = styled.button`
  width: 100px;
  height: 40px;
  color:#787D86;
  background-color: #fff;
  border: 1px solid #DDE1E6;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  img {
    margin-right: 8px;
  }
  :hover {
    cursor: pointer;
    background-color: #F5F8FA;
  }
`;
