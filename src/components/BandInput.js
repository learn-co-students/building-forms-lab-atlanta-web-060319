// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  }


  handleOnChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>add band: </label>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}




export default BandInput;
