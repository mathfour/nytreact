import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css'
import Form from './components/sections/Form'
import helpers from './components/utils/helpers'

class App extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      term: "",
      resultArticles: [],
      savedArticles: []
    }
    this.setSearchTerms = this.setSearchTerms.bind(this)
  }
  
   componentDidMount() {
    helpers.getSavedArticle().then(function (dbArticles) {
      this.setState({
        savedArticles: dbArticles.data
      });
    }.bind(this));
    // this._notificationSystem = this.refs.notificationSystem;
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.topic !== this.state.topic) {
      helpers.searchArticle(this.state.topic)
        .then((newResult) => {
          this.setState({ resultArticles: newResult });
        });
    }
  }
  
  
  
  
  setSearchTerms(newSearchTerm) {
    this.setState({term: newSearchTerm})
  }
  
  
  render() {
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
        <Form term={this.setSearchTerms}/>
        
        <div className="App-footer">
          Created by Bon Crowder, 2017
        </div>
      
      
      </div>
    );
  }
}

export default App;
