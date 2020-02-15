import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Tooltip, Menu } from 'antd';
import Diamond from '../business-set-1040-512.png'

class Header extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    loginDiv = (name) => {
        if (name) {
            document.getElementById("loginDiv").style.opacity = 1;
            document.getElementById("loginDiv").style.marginTop = "20px";
        } else {
            document.getElementById("loginDiv").style.opacity = 0;
            document.getElementById("loginDiv").style.marginTop = "50px";
        }
    }

    render() {
        return (
            <div className="header">
                <div className="firstHeader">
                    <span className="phone">PHONE SHOPING (01) 123 456 UJ</span>

                    <span className="socialIcon">

                        <Tooltip placement="bottomLeft" title="Facebook">
                            <FacebookIcon style={{ marginRight: 20 }} fontSize="small" />
                        </Tooltip>

                        <Tooltip placement="bottomLeft" title="Twitter">
                            <TwitterIcon style={{ marginRight: 20 }} fontSize="small" />
                        </Tooltip>

                        <Tooltip placement="bottomLeft" title="Instagram">
                            <InstagramIcon style={{ marginRight: 20 }} fontSize="small" />
                        </Tooltip>
                    </span>

                    <span className="list">
                        <span className="listAll">
                            <div
                                id="loginDiv"
                                onMouseOver={() => this.loginDiv("a")}
                                onMouseOut={() => this.loginDiv()}
                            >
                                <form>
                                    <span
                                        style={{ display: "block", fontSize: 16,marginBottom: 5,fontWeight: 400 }}
                                    >
                                        Email Address:<sup style={{ color: "red",fontWeight: "bold" }}>*</sup>
                                    </span>
                                    <input
                                        type="text"
                                    />
                                </form>
                            </div>
                            <span style={{ marginRight: 30 }}>MY ACCOUNT</span>
                            <span
                                onMouseOver={() => this.loginDiv("a")}
                                onMouseOut={() => this.loginDiv()}
                                style={{ marginRight: 10 }}
                            >
                                LOGIN
                            </span>
                            <span style={{ fontSize: 15 }}>/</span>
                            <span style={{ marginLeft: 10 }}>CREATE ACCOUNT</span>
                        </span>
                    </span>
                </div>

                <div className="secondHeader">
                    <span>
                        <span className="logo"><img src="//cdn.shopify.com/s/files/1/0908/7252/t/2/assets/logo.png?82" /></span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Header;
