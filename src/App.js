import React from 'react';
import './App.css';
import Header from './components/HeaderSection';
import ModalSection from './components/atoms/ModalSection';
import LeftSidebarSection from './components/LeftSidebarSection'
import ForYouSection from './components/ForYouSection'

 const App = () => {
   return (
    <div class="MainContainer">
      <Header />
      <LeftSidebarSection />
      <ForYouSection />
    </div>
    // <ModalSection />
  )
}

export default App;