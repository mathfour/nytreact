import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css'
import Form from './components/sections/Form'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      searchTerm: ""
    }
  }
  
  // this.onInputChange = this.onInputChange.bind(this);
  // this.onFormSubmit = this.onFormSubmit.bind(this);

  setSearchTerms (newSearchTerm) {
  this.setState({searchTerm: newSearchTerm})
  }
 

render()
{
  return (
    <div className="App">
      <div className="App-header">
        {/*<img src={logo}*/}
             {/*className="App-logo"*/}
             {/*alt="logo"/>*/}
        <h2>New York Times Stuff</h2>
      </div>
      <p className="App-intro">
       Enter a search term.
      </p>
      {/*<Child title={this.state.title}/>*/}
      <Form searchTerm={this.setSearchTerms} />
      
      <div className="App-footer">
        Created by Bon Crowder, 2017
      </div>
      
      
    </div>
  );
}
}

export default App;
