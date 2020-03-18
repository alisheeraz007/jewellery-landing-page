import React, { Component } from 'react';
import logo from '../allimages/headerLogo2.png'
import profile from '../allimages/profile.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { Tooltip } from '@material-ui/core';

class Footer extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="footerMain">
                <div className="footerFlexDiv">

                    <div style={{ width: "30%", display: "flex", alignItems: "left", flexDirection: "column", height: 350, justifyContent: "space-evenly" }}>
                        <img style={{ width: 150, marginBottom: 20 }} src={logo} />
                        <img style={{ width: 130 }} src={profile} />
                        <p style={{ fontSize: 16, fontWeight: 300, color: "#8d8d8d", lineHeight: 1.5 }}>
                            Architecture is both the <br /> process and the product <br /> of planning, designing...
                        </p>
                    </div>

                    <div style={{ width: "30%", display: "flex", alignItems: "left", flexDirection: "column", height: 380, justifyContent: "space-evenly" }}>
                        <h3 style={{ color: "white", fontWeight: 700, letterSpacing: 2 }}>LATEST POST</h3>
                        <p style={{ color: "white", fontSize: 16 }}>
                            The Most Spectacular <br />
                            House in Los Angeles <br />
                            <span style={{ color: "#8d8d8d", fontSize: 14 }}>04.01.2017</span>
                        </p>
                        <p style={{ color: "white", fontSize: 16 }}>
                            Tricks of the Trade: <br />
                            Architectural Guardrails <br />
                            <span style={{ color: "#8d8d8d", fontSize: 14 }}>04.01.2017</span>
                        </p>
                        <p style={{ color: "white", fontSize: 16 }}>
                            Interview with the Tom <br />
                            Stoppard <br />
                            <span style={{ color: "#8d8d8d", fontSize: 14 }}>04.01.2017</span>
                        </p>
                    </div>

                    <div style={{ width: "30%", display: "flex", alignItems: "left", flexDirection: "column", height: 350, justifyContent: "space-evenly" }}>
                        <h3 style={{ color: "white", fontWeight: 700, letterSpacing: 2 }}>JOIN THE CLUB</h3>
                        <div className="inputtDiv">
                            <input placeholder="Your Adress" style={{ height: 40, paddingLeft: 10 }} />
                            <button style={{ border: 0, height: 40, color: "white", fontWeight: 700, backgroundColor: "rgba(65, 65, 65, 1)", paddingLeft: 10, paddingRight: 10 }}>GO</button>
                        </div>
                        <p style={{ color: "#8d8d8d", fontSize: 16 }}>
                            Architecture is both the <br />
                            process and the<br />
                            product of planning, <br />
                            designing...
                        </p>
                        <div className="inputtDiv">
                            <Tooltip title="Facebook">
                                <FacebookIcon fontSize="small" style={{ color: "#8d8d8d",cursor: "pointer" }} />
                            </Tooltip>

                            <Tooltip title="Twitter">
                                <Twitter fontSize="small" style={{ color: "#8d8d8d",cursor: "pointer", marginLeft: 15 }} />
                            </Tooltip>

                            <Tooltip title="Printerest">
                                <PinterestIcon fontSize="small" style={{ color: "#8d8d8d",cursor: "pointer", marginLeft: 15 }} />
                            </Tooltip>

                            <Tooltip title="Instgram">
                                <InstagramIcon fontSize="small" style={{ color: "#8d8d8d",cursor: "pointer", marginLeft: 15 }} />
                            </Tooltip>

                            <Tooltip title="Dribbble">
                                <SportsBasketballIcon fontSize="small" style={{ color: "#8d8d8d",cursor: "pointer", marginLeft: 15 }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: "white", width: "100%", textAlign: "center", letterSpacing: 2 }}>Powered By SOFT-SYNC-DEV</h3>
                </div>
            </div>
        )
    }
}

export default Footer;
