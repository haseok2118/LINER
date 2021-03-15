import React from 'react'

export const RightSidebarSection = () => {

  return (
  <>
    <RightSidebarContainer>
      <AddLinerBox>
        <AddLinerContent>
          <div>
            <div>
              <h2>Add LINER</h2>
              <p>Add LINER to your browser and start highlighting.</p>
            </div>
            <div></div>
          </div>
        </AddLinerContent>
        <AddLinerButton>
          <button>Add to Browser</button>
        </AddLinerButton>
      </AddLinerBox>
      <KeyWords>
        <div>
          Trending Keywords
        </div>
        <SpreadKeyWords />
      </KeyWords>
      <RecommandPages>
        <div>
          Trending Pages
        </div>
        <SpreadPageContents />
      </RecommandPages>
      
    </RightSidebarContainer>
    <Footer />
  </>
  )
}

export default RightSidebarSection;