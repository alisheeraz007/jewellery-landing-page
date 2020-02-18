import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from '../actions/action';
import logo from '../home_line.png'
import SendIcon from '@material-ui/icons/Send';

class SixthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    divHover = (index, name) => {
        if (name) {
            document.getElementById(`productReview${index}`).style.opacity = 1
        } else {
            document.getElementById(`productReview${index}`).style.opacity = 0
        }
    }


    render() {
        return (
            <div className="mainContainer6">
                <h6>NEWS LETTER<br /><img src={logo} /></h6>
                <p>We promise only send the good things</p>
                <input
                    type="text"
                    placeholder="Your Email Address"
                />
                <button>
                    <SendIcon/>
                </button>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SixthPage));