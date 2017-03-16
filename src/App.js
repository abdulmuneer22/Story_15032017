import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'

import injectTapEventPlugin from 'react-tap-event-plugin';

import reducers from './redux/reducers'
injectTapEventPlugin();
import Table from './Components/Table'

class App extends Component {
  render() {
    return (
      
      <Provider store={createStore(reducers)}>
      <Table/>
      </Provider>

    );
  }
}

export default App;
