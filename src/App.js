import React, { Component } from "react"
import Counter from "./Counter"
// import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed:40 ,
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
    this.generateSeed = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) })

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() })
  }


  render() {
    return (
      <div>
        <button
          style={style.buttonStyle}
          onClick={this.mountCounter}
          disabled={this.state.mount}
        >
          Mount Counter
        </button>
        <button
          style={style.buttonStyle}
          onClick={this.unmountCounter}
          disabled={!this.state.mount}
        >
          Unmount Counter
        </button>
        <button style={style.buttonStyle} onClick={this.ignoreProp}>
          Ignore Prop
        </button>
        <button style={style.buttonStyle} onClick={this.generateSeed}>
          generate Seed
        </button>
        {this.state.mount && (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        )}
      </div>
    )
  }
}

const style = {
  buttonStyle: {
    padding: "10px",
    margin: "10px",
    width: "130px",
  },
  counter: {
    fontWeight: "bold",
  },
}
