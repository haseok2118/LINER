import React from 'react'
import {
  AddLinerContainer,
  AddLinerContent,
  AddLinerButton,
} from './AddLinelElement'

const AddLinerSection = () => {

  return (
    <AddLinerContainer>
      <AddLinerContent>
        <div className="add-liner-content-box">
          <div>Add LINER</div>
          <p>Add LINER to your browser and start highlighting.</p>
        </div>
        <img className="add-liner-image" src="add-liner.svg" alt="" width="48px" height="48px"/>
      </AddLinerContent>
      <AddLinerButton>Add to Browser</AddLinerButton>
  </AddLinerContainer>
  );

}

export default AddLinerSection;