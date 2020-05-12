import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './all.scss';
import 'antd/dist/antd.css';
import MainPage from './components/MainPage'
import { getData } from './actions/action';
import { connect } from 'react-redux'
import Header from './components/Header';
import firebase from 'firebase';
import config from './config/configKey'
import ProductPage from './components/productPage';

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="mainContainerMain">
        <Header />
        <Router>
          <Route
            exact path="/"
            render={() => <MainPage
              state={this.state}
            />} />

          <Route
            exact path="/ProductPage"
            render={() => <ProductPage
              state={this.state}
            />} />

          <Route
            exact path="/ProductPage/:id"
            render={() => <ProductPage
              state={this.state}
            />} />

        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    state
  }
}

const matchDispatchToProps = { getData }

export default connect(mapStateToProps, matchDispatchToProps)(App);
