import React, {Component} from 'react'
import './App.css';
import Timer from './Componenets/Timer';

class App extends Component {

  constructor(){
    super()
    this.state ={
      name:'Syrine Dridi',
      counter:0,
      show : false
    }
  }
 
  Incerement(){
    this.setState({
      counter : this.state.counter + 1
    })
  }
  
  Decrement = () =>{
    if(this.state.counter>0){
      this.setState({
        counter : this.state.counter - 1
      })
    }
  }

  Reset =()=>{
    this.setState({
      counter : 0
    })
  }

  Increment_with_value =(val)=>{
    this.setState({
      counter : this.state.counter + val
    })
  }

  Toggle =()=>{
    this.setState({
      show : !this.state.show
    })
  }

  render(){
    let name = this.state.name
    return (
      <div className="App">
        <h1>This is a ws of state -- class</h1>
        <h2>{name}</h2>
        <hr/>
        <h2>{this.state.counter}</h2>
        <button onClick={()=> this.Incerement()}>+</button>
        <button onClick={()=> this.Decrement()}>-</button>
        <button onClick={()=> this.Reset()}>RESET</button>
        <input onChange={(e)=>this.Increment_with_value(+e.target.value)} type='text' placeholder='put a number'/>
        <hr/>
        {this.state.show && <Timer/>}
        <button onClick={()=>this.Toggle()}>{this.state.show? 'Hide Timer' : 'Show Timer'}</button>
      </div>
    );
  }
  
}

export default App;
