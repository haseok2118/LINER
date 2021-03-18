import React from 'react';
import { useHistory } from "react-router-dom";
import {
  DetailNavbarContainer,
  DetailNavbarTab,
  DetailNavbarButtons,

  ShareModal,
} from './DetailNavbarElements';
import DotButtonDropdown from '../atoms/DropdownSection/DotButtonDropdown';
import SaveButton from '../atoms/ButtonSection/SaveButton';

export const DetailNavbarSection = () => {
  let history = useHistory();

return (
  <DetailNavbarContainer>
    
    <DetailNavbarTab>
        <button type="button"/>
      </DetailNavbarTab>
      <DetailNavbarButtons>
        <SaveButton />
        <ShareModal >
          <img src="./images/share-header.svg" alt="" />
        </ShareModal>
        <DotButtonDropdown />
      </DetailNavbarButtons>
  
  </DetailNavbarContainer>
  )
}

export default DetailNavbarSection;
