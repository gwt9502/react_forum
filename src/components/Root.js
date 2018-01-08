import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../redux/store";
import App from '../containers/App'

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <App store={store} />
			</Provider>
    );
  }
}

export default Root;
