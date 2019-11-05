import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		val : 0
  	}
  }

  render() { 	
    return (
      <div>
        <span className="value">{this.state.val}</span>
        <button id="inc" onClick={this.sumNum.bind(this)}>Incrementa</button>
      </div>
    );
  }

  sumNum(){
  	this.setState({
      val: this.state.val + 1
    });
  }
}

export default App;
