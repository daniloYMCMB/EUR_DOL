import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        usd: 0,
        eu: 0.87912,
      }
  }

  componentWillMount(){
    //Called the first time the component is loaded right before the component is added to the page
    console.log("componentWillMount")
  }

  componentDidMount() {
    //Called after the component has been rendered into the page
    console.log("componentDidMount")
  }

  usdeur() {
    var usd = this.refs.usd.value;
    var eu = this.state.eu;
    var calculo;

    calculo = usd * eu;
    var euInput = document.getElementById("eu");
    var total = euInput.value = calculo;
  }

  handleClick(e) {
    e.preventDefault();
    this.usdeur()
  }

  handleUSD(e) {
    this.usdeur()
  }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <form action="">
            <input ref="usd" type="text" placeholder="USD / 1" onChange={ (e) => {this.handleUSD(e); } }/>
            <input id="eu" type="text" placeholder="EURO / 0,8791" disabled/>
            <button onClick={ (e) => {this.handleClick(e); } }>
              CALCULATE
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default App;
