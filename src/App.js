import './App.css';
import React from 'react';
import AddField from'./AddField.js';

class App extends React.Component{

  render() {
    return(
      <div>
        <label>Table Displayed</label>
         <AddField/>
      </div>
   
    )
  }
}

export default App;
