
import React from 'react'
import helpers from '../../components/utils/helpers'


// var Result = React.createClass({

class Result extends React.Component {
  constructor(props) {
    super(props)
    
    // this.state = {
    //   term: "",
    //   resultArticles: [],
    //   savedArticles: []
    // }
    // this.handleClick = this.handleClick.bind(this)
  }

  
  render() {
    
    return (
      <div className="col-md-6">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title"> Results </h3>
          </div>
          <div className="panel-body">
            <ul className="list-group article-list">
              {/*{articles}*/}
              Stuff should go here.
            </ul>
          </div>
        </div>
      </div>
    );
  }
      }

// module.exports = Result;

export default Result