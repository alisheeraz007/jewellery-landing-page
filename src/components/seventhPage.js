import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from '../actions/action';
import logo from '../home_line.png'
import SendIcon from '@material-ui/icons/Send';

class SeventhPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <>
                <div className="mainContainer7">
                    <div>
                        <h2>ABOUT US</h2>
                        <p>Store Locations</p>
                        <p>Wholsalers</p>
                        <p>Map Site</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h2>INFORMATION</h2>
                        <p>Helps & FAQs</p>
                        <p>Advance Search</p>
                        <p>Gift Cards</p>
                        <p>Shop By Brands</p>
                    </div>

                    <div>
                        <h2>ACCOUNT</h2>
                        <p>Preferenses</p>
                        <p>Order History</p>
                        <p>Cart Page</p>
                        <p>Sign In</p>
                    </div>

                    <div>
                        <h2>CUSTOMER</h2>
                        <p>Search Advanced</p>
                        <p>Return Policy</p>
                        <p>Privacy Policy</p>
                        <p>Help & Contact</p>
                    </div>
                </div >
                <div className="mainContainer8">
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeventhPage));