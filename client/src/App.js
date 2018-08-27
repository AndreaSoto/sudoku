import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      response: []
    };
  }

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.board }  ))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/sudoku/board');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku Test 1</h1>
        </header>
          <div className="container col-md-offset-3"><div className="row">
              {this.state.response.map(function(val, index){
                 return <div className="col-sm-1 float-left mx border border-dark display-4" key={index} id={index}>{val}</div>
              })}
          </div></div>
      </div>
    );
  }
}

export default App;
