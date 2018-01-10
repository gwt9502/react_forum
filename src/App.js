import React, { Component } from 'react';
import './App.scss'
import Home from './containers/Home'
import Detail from './containers/Detail'
import Comment from './containers/Comment'
import Login from './containers/Login'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

class App extends Component {

  render() {
    return (
      <Router>
          <div className="container">
            { this.props.loading ? <div className="loading">加载中...</div> : null }
            { this.props.showCommon ? <Header /> : null }
            <Switch>
              <Route path="/home" component={Home} props={this.props} />
              <Route path="/comment" component={Comment} />
              <Route path="/login" component={Login} />
              <Route path="/newsDetails/:id" component={Detail} />
              {/* <Redirect from="/" to="/home" /> */}
              <Route component={Home} />
            </Switch>
            { this.props.showCommon ? <Footer /> : null }
          </div>
        </Router>
    );
  }
}

export default App;
