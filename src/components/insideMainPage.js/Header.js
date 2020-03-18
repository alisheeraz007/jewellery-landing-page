import React, { Component } from 'react';
import logo from '../allimages/headerLogo.png'


class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="header">
                <div>
                    <p style={{marginLeft: 0}}>home</p>
                    <p>pages</p>
                    <p>elements</p>
                </div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <p>home</p>
                    <p>pages</p>
                    <p style={{marginRight: 0}}>elements</p>
                </div>
            </div>
        )
    }
}

export default Header;
