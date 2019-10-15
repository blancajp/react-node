import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import logo from './logo.svg';
import './App.css';

// Load Highcharts modules
require('highcharts/modules/data')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'My chart'
  },
  data: {
    rowsURL: 'https://5d9b9f3e686ed000144d2355.mockapi.io/chart1',
    firstRowAsNames: false,
    enablePolling: false
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
