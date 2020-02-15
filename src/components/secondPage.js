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


class SecondPage extends Component {
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
                <div style={{ height: "100vh" }} className="mainContainer2">
                    <h6>POPULAR COLLECTIONS</h6>
                </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SecondPage));