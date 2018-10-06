import React, { Component } from 'react';
import questions from '../data'

export default class Quiz extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         index: 0
      }
    }

    componentDidMount = () => {
      fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }
    
    
    nextQuestion = () => {
      this.setState({
          index: this.state.index + 1
      })
    }
    

  render() {
    console.log(this.state.list)
      let { index } = this.state      
    return (
      <div className="wrapper">
        <div className="quiz">
          <h3>{questions[index].question}</h3>
          <button onClick={this.nextQuestion}>Next</button>
        </div>
      </div>
    )
  }
}
