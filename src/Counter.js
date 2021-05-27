import React, { Component } from "react"

export default class Counter extends Component {
  constructor(props) {
    super(props)
    console.log("constructor")
    this.state = {
        counter: 0,
        seed: 0
    }
    this.increment = () => this.setState({ counter: this.state.counter + 1 })
    this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }

    static getDerivedStateFromProps(props, state) {
    //static method called before all methods (used to copy props to state)
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        //trigger when component is constructed // it calls just after render()
        console.log("component Did Mount")
        console.log("-------------------")
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        //tell react if render should be triggered (by the changes) or not //true by defalut
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("should Component Update - DO NOT RENDER!!")
            console.log("-------------------")
            return false
        }
        console.log("should Component Update - RENDER")
        return true
    }
     

  render() {
    console.log("Render")
    return (
      <div>
        <button
          className="btn"
          style={style.buttonInc}
          onClick={this.increment}
        >
          (+)
        </button>
        <button
          className="btn"
          style={style.buttonDec}
          onClick={this.decrement}
        >
          (-)
        </button>
        <div className="counter" style={style.counter}>
          Counter: {this.state.counter}
        </div>
      </div>
    )
    }
    componentDidUpdate = () => {
       //called after render is finished
    console.log('component Did Update');
    console.log("-------------------")
    }

    componentWillUnmount() {
        //called when component taken out from the DOM
        console.log("component Will Unmount")
        console.log("-------------------")
    }

     
}

const style = {
  buttonInc: {
    backgroundColor: "orange",
  },
  buttonDec: {
    backgroundColor: "red",
  },
  counter: {
    fontWeight: "bold",
  },
}
