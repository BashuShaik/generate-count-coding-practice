// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    const generatedCount = Math.ceil(Math.random() * 100)
    this.setState({count: generatedCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="con-one">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.generate} type="button" className="button">
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
