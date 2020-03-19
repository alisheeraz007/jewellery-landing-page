import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './all.css';
import 'antd/dist/antd.css';
import MainPage from './components/MainPage'
import { getData } from './actions/action';
import { connect } from 'react-redux'
import firebase from 'firebase';
import config from './config/configKey'
import Footer from './components/insideMainPage.js/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import AfterSlider from './components/insideMainPage.js/AfterSlider';

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact path="/"
            render={() => <MainPage
              state={this.state}
            />} />
            <Route
            exact path="/*/home"
            render={() => <AfterSlider
              state={this.state}
            />} />
          <ScrollAnimation animateOnce animateIn="fadeIn" duration={2}>
            <Footer />
          </ScrollAnimation>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const matchDispatchToProps = { getData }

export default connect(mapStateToProps, matchDispatchToProps)(App);