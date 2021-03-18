import React from 'react';
import './App.css';
import Header from './components/HeaderSection';
import LeftSidebarSection from './components/LeftSidebarSection';
import ForYouSection from './components/ForYouSection';
import MyHighlightsSection from './components/MyHighlightsSection';
import ForYouDetailSection from './components/ForYouDetailSection';

 const App = () => {
   return (
    <div class="MainContainer">
      <Header />
      <LeftSidebarSection />
       {/* <ForYouSection /> */}
       {/* <MyHighlightsSection /> */}
       <ForYouDetailSection />
    </div>
  )
}

export default App;