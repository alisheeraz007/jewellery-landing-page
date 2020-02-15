import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { capitalizeFirstLetters } from '../common/index'
import { add } from '../actions/action';
import firebase from 'firebase'
import head from '../slide-image-caption-1.webp'
import head2 from '../slide-image-caption-2.webp'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ScrollAnimation from 'react-animate-on-scroll';
import SecondPage from './secondPage';


class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 1
        }
    }

    sliderIconTrue = (name) => {
        if (name) {
            document.getElementById("sliderIcon1").style.opacity = 1
            document.getElementById("sliderIcon2").style.opacity = 1
        }
        else {
            document.getElementById("sliderIcon1").style.opacity = 0
            document.getElementById("sliderIcon2").style.opacity = 0
        }
    }

    setSlide = () => {
        this.setState({
            slide: this.state.slide === 1 ? 2 : 1
        }, () => {
            if (this.state.slide === 1) {
                document.getElementById("slider1").style.opacity = 1;
                document.getElementById("slider2").style.opacity = 0;
            } else {
                document.getElementById("slider1").style.opacity = 0;
                document.getElementById("slider2").style.opacity = 1;
            }
        })
    }

    render() {
        return (
            <>
                <div style={{ height: "100vh" }} className="mainContainer">
                    {this.state.slide === 1 ?
                        <div className="sliderContentDiv" onMouseOver={() => this.sliderIconTrue("a")} onMouseOut={() => this.sliderIconTrue()}>
                            <ScrollAnimation duration={2} animateIn="fadeIn">
                                <p className="live">Live the moment</p>
                            </ScrollAnimation>
                            <ArrowBackIosIcon
                                id="sliderIcon1"
                                style={{ float: "left" }}
                                onClick={() => this.setSlide()}
                            />
                            <ScrollAnimation duration={1} animateIn="slideInLeft">
                                <img src={head} />
                            </ScrollAnimation>

                            <ArrowForwardIosIcon
                                id="sliderIcon2"
                                style={{ float: "right" }}
                                onClick={() => this.setSlide()}
                            />
                            <ScrollAnimation duration={2} animateIn="fadeIn">
                                <p className="p1">
                                    LOREM IPSUM DOLOR SITAMET ABC ADJ KNKLNAS KKLNADS NN
                                </p>
                                <a className="seeButton">
                                    SEE COLLECTION
                        </a>
                            </ScrollAnimation>
                        </div>
                        : null}

                    {this.state.slide === 2 ?
                        <div className="sliderContentDiv2" onMouseOver={() => this.sliderIconTrue("a")} onMouseOut={() => this.sliderIconTrue()}>
                            <ArrowBackIosIcon
                                id="sliderIcon1"
                                style={{ float: "left" }}
                                onClick={() => this.setSlide()}
                            />
                            <ScrollAnimation duration={1} animateIn="slideInLeft">
                                <img src={head2} />
                            </ScrollAnimation>

                            <ArrowForwardIosIcon
                                id="sliderIcon2"
                                style={{ float: "right" }}
                                onClick={() => this.setSlide()}
                            />
                            <ScrollAnimation duration={1} animateIn="slideInLeft">
                                <span className="p2">Love's imbrace</span>
                            </ScrollAnimation>
                            <ScrollAnimation duration={2} animateIn="fadeIn">
                                <a className="seeButton">
                                    SEE COLLECTION
                        </a>
                            </ScrollAnimation>
                        </div>
                        : null}

                    < div className="slider1" id="slider1">

                    </div>

                    <div className="slider2" id="slider2">

                    </div>
                </div >

                <div className="secondContainer">
                    <SecondPage/>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        state
    }
}

const mapDispatchToProps = { add }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));