import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { capitalizeFirstLetters } from '../common/index'
import { add } from '../actions/action';
import firebase from 'firebase'
import Header from './insideMainPage.js/Header';
import Sllider from './insideMainPage.js/Slider';
import AfterSlider from './insideMainPage.js/AfterSlider';
import ImagesView from './insideMainPage.js/ImagesView';
import ScrollAnimation from 'react-animate-on-scroll';


class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 1
        }
    }

    render() {
        return (
            <>
                <div className="mainContainer">
                    <Header />
                    <ScrollAnimation animateOnce animateIn="fadeIn" duration={2}>
                        <Sllider />
                    </ScrollAnimation>

                    <ScrollAnimation animateOnce animateIn="fadeIn" duration={2}>
                        <AfterSlider />
                    </ScrollAnimation>

                    <ScrollAnimation animateOnce animateIn="fadeIn" duration={2}>
                        <ImagesView />
                    </ScrollAnimation>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = { add }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));