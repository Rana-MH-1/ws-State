import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state={
            timer : 0,
            intervall : null
        }
    }

    componentDidMount(){
        console.log('timer is mounted')
        this.setState({
         intervall : setInterval(()=> this.setState({
            timer: this.state.timer +1
         }),1000)
        })
    }

    componentDidUpdate(){
        console.log('the Timer has updated')
        console.log(this.state.timer);
    }

    componentWillUnmount(){
        console.log('the Timer is killed !!');
        clearInterval(this.state.intervall)
    }
  render() {
    return (
      <div>
        <h2>This this a timer comp</h2>
        <h3>The Timer has mounted since {this.state.timer}</h3>
      </div>
    )
  }
}
