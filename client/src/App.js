import React, { Component } from 'react'
import axios from 'axios'

class App extends React.Component{
  state = {
    response: {}
  }

  componentDidMount(){
    axios.get('/api/v1/test-send')
      .then((res) => {
        const response = res.data
        this.setState({response})
      })
  }

  render(){
    return(
      <div className="App">
        <h1>App frontend render</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    )
  }
}

export default App