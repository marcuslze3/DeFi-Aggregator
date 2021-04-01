import logo from './eth.png';

import React, { Component } from 'react';
import ConnectedResultsTable from './ConnectedResultsTable';
import NewResultsForm from './NewResultsForm';
import RankedCurrenciesTable from './RankedCurrenciesTable';
import './App.css';

import LogoBox from './LogoBox.js'
import TextBox from './TextBox.js'
import Slider from './Slider.js'

class App extends Component {

  render() {

    return (

    <div className="App">

<div className ="TopTable">
      <TextBox></TextBox>
      <LogoBox></LogoBox>
      <h5 align="center"> The place to find optimal yield for your cryptocurrency portfolio </h5>
    </div>   
    <div className ="ui container"><h3> Best cryptocurrencies to provide liquidity on are: </h3> </div>
    <RankedCurrenciesTable />
        <div className ="MiddleDivider"> </div>
        <div className ="App3"> </div>
        <div className ="ui container"><h3>Optimal portfolio is:</h3></div>
        <ConnectedResultsTable />
        <NewResultsForm />
        <Slider />
      </div>
    );
  }
}
export default App;


<div className ="Table1Header"><h3> Best cryptocurrencies to provide liquidity on are: </h3> </div>