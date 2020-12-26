import React from 'react'
import './App.css';
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number:0
    }
  }

  render () {
    return (
      <div className="App">
        <h1>ROOT</h1>
        <AddNumberRoot />
        <DisplayNumberRoot/>
  
      </div>
    );
  }
  
}

export default App;
