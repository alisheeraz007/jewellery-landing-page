import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { capitalizeFirstLetters } from '../common/index'
import { add } from '../actions/action';
import firebase from 'firebase'
import head from '../slide-image-caption-1.webp'


class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 1
        }
    }

    render() {
        return (
            <div style={{ height: "100vh" }} className="mainContainer">

                <div className="sliderContentDiv">
                    <p>Live the moment</p>
                    <img src={head} />
                    <p>LOREM IPSUM DOLOR SITAMET ABC ADJ KNKLNAS KKLNADS NN</p>
                </div>

                {/* {this.state.slide === 1 ? */}
                    <div className="slider1">

                    </div>
                    {/* : null} */}

                {/* {this.state.slide === 2 ? */}
                    <div className="slider2">

                    </div>
                    {/* : null} */}
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

const mapDispatchToProps = { add }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));