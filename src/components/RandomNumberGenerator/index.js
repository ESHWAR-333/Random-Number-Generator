import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    const generatedNumber = Math.floor(Math.random() * 101)
    this.setState({number: generatedNumber})
  }

  render() {
    const {number} = this.state
    console.log(number)
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generateButton"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
