import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Blog from './components/blog/blog';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        usd: 0,
        eu: 0.88257,
        items: {},
        inputNumeric: '',
      }
  }

  componentWillMount(){
    //Called the first time the component is loaded right before the component is added to the page
    console.log("componentWillMount")
  }

  componentDidMount() {
    //Called after the component has been rendered into the page
    console.log("componentDidMount")
    fetch('http://data.fixer.io/api/latest?access_key=db795dc8cc087ef12207d1a560100f78&format=1?base=USD&symbols=EUR')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })

  }

  usdeur() {
    var usdInput = this.refs.usd.value;

    var items = this.state.items;
    var rates = items.rates;
    for (const rate in rates) {
      var itemsRateEUR = rates[rate]
    }
    
    var eu = itemsRateEUR;
    var calculo;

    calculo = usdInput * eu;
    var euInput = document.getElementById("eu");
    euInput.value = calculo.toFixed(4);
  }

  handleClick(e) {
    e.preventDefault();
    this.usdeur()
  }

  handleUSD(e) {
    this.refs.usd.value = this.refs.usd.value
      .replace(/[^\d.]/g, '')             // numbers and decimals only
      .replace(/(^[\d]{7})[\d]/g, '$1')   // not more than 2 digits at the beginning
      .replace(/(\..*)\./g, '$1')         // decimal can't exist more than once
      .replace(/(\.[\d]{4})./g, '$1')   // not more than 4 digits after decimal
      
    var nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    });
    console.log(nf.format(this.refs.usd.value));
 
    this.usdeur()
  }


  render() {

    var { isLoaded, items } = this.state;

    return (
      <div className="App">

        <Header />

        <div className="Converter">
          <form action="">
            <div className="Converter-box">
              <input ref="usd" id="usd" type="number" step="0.0001" placeholder="USD / 1" 
                onChange={ (e) => {this.handleUSD(e); } } />
              <input id="eu" type="text" placeholder="EURO / 0,88257" disabled/>
            </div>
            <button className="Converter-submit" onClick={ (e) => {this.handleClick(e); } }>
              CALCULATE
            </button>
          </form>
        </div>

        <Blog />

      </div>
    );
  }
}

export default App;
