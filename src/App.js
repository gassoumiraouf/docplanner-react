import React from 'react';
import NavbarList from './navbar'
import './App.css';
import Intro from './introduction';
import DocCard from './docCards';
import Global from './global';
import Platform from './platform';
import Catalogue from './catalogue'

function App() {
  return (
    <div className="App">
     <NavbarList/>
     <Intro/>
     <DocCard/>
     <Global/>
     <Platform/>
     <Catalogue/>

    </div>
  );
}

export default App;
