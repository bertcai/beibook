import React, { Component } from 'react';
import { Button } from 'antd';
import Nav from './Nav';
import QueTable from  './QueTable';
import './App.css';

class App extends Component {
  render(){
      return(
          <div>
              <div>
                  <Nav/>
              </div>
              <div>
                  <QueTable/>
              </div>
          </div>
      );
  }
}

export default App;
