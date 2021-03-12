import React from 'react';
import './App.css';
import {MainContainer} from './AppElement'
import Header from './components/HeaderSection';
import ModalSection from './components/atoms/ModalSection';
import LeftSidebarSection from './components/LeftSidebarSection'

 const App = () => {
   return (
     <MainContainer>
       <Header />
       <LeftSidebarSection />
    </MainContainer>
    // <ModalSection />
  )
}

export default App;