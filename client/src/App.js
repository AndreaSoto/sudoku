import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      response: [], 
      loading: true
    };
  }

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.board, loading: false }  ))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    this.setState({ loading: true });
    const response = await fetch('/sudoku/board');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  reloadBoard(event) {
    this.callApi()
    .then(res => this.setState({ response: res.board, loading: false }  ))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku Test 1</h1>
        </header>
        <div className="col-sm-1">
              <button onClick={ this.reloadBoard.bind(this) } className="btn-primary form-control">Reload</button>
        </div>
          <div className="container col-md-offset-3">
            
            {this.state.loading? 
              <div className="row">
                <div className="right" id="html-spinner"></div>
              </div>
              :
              <div className="row">
                  {this.state.response.map(function(val, index){
                    return <div className={ `col-sm-1 float-left mx border border-light display-4 i${index}`} key={index} id={index}>{val}</div>
                  })}
              </div>
            }
          </div>
      </div>
    );
  
  }
}

export default App;
