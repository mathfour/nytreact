import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      term: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    this.setState({term: event.target.value})
    
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.term(this.state.title)
    return false
  }
  
  
  render() {
    return (
      <div className="col-md-12">
        <div className="search-panel">
          <form className="form-inline text-center"
                onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     id="topic"
                     onChange={this.handleChange}
                     placeholder="Search term"
                     required/>
            </div>
            
            <button type="submit"
                    className="btn btn-info">Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form