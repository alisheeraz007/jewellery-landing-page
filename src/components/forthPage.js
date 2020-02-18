import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from '../actions/action';
import back from '../background.webp'
import logo from '../backgroundLogo.webp'

class ForthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="mainContainer4" style={{ backgroundImage: `url(${back})` }}>
                <div>
                    <img src={logo} />
                    <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <hr/>
                    <a>Shop Now</a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ForthPage));