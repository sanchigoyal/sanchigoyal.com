import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import SgHeader from './components/sg-header/SgHeader'
import SgFooter from './components/sg-footer/SgFooter'
import Profile from './components/profile/Profile'

// this makes font-awesome icons available globally
library.add(fab);
library.add(fas);

class App extends Component {
  render() {
    return (
      <div className="App">
          <SgHeader></SgHeader>
          <Profile></Profile>
          <SgFooter></SgFooter>
      </div>
    );
  }
}

export default App;
