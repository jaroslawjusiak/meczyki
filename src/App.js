import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {

  state = {
    counter: 0
  };

  loadClicks = () => {
    axios.get('https://meczyki.firebaseio.com/clicks.json')
      .then(res => {
        console.log('[Get clicks: ] response:', res.data);
        this.setState({ counter: res.data.clicks });
      })
      .catch(err => {
        console.log('[Get clicks error]:', err);
      });
  };

  componentDidMount() {
    this.loadClicks();

  }

  clickHandler = () => {
    console.log('Kliknięto');
    let counter = this.state.counter + 1;
    axios.put('https://meczyki.firebaseio.com/clicks.json', { clicks: counter })
      .then(res => {
        console.log('[Update clicks: ] response:', res.data.clicks);
        this.setState({ counter: counter });
      })
      .catch(err => {
        console.log('[Update clicks error]:', err);
      });
  };

  render() {
    let counterText = <p>{this.state.counter}</p>;
    return (
      <div className="App">
        <p>Test</p>
        <button onClick={this.clickHandler}>Click</button>
        {counterText}
      </div>
    );
  };

}



export default App;
