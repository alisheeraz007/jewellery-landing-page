import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Tooltip, Menu } from 'antd';
import Diamond from '../business-set-1040-512.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CollectionTable from './collectionTable';
import CollectionImg from '../menu_image_1.webp'
import PageTable from './PageTable';
import BlogList from './blogTable';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
            document.getElementById("loginDiv").style.height = "320px";
            document.getElementById("loginDiv").style.padding = "30px";
            document.getElementById("loginDiv").style.borderWidth = "1px";
        } else {
            document.getElementById("loginDiv").style.opacity = 0;
            document.getElementById("loginDiv").style.marginTop = "50px";
            document.getElementById("loginDiv").style.height = "0px";
            document.getElementById("loginDiv").style.padding = "0px";
            document.getElementById("loginDiv").style.paddingLeft = "30px";
            document.getElementById("loginDiv").style.paddingRight = "30px";
            document.getElementById("loginDiv").style.borderWidth = "0px";
        }
    }

    collectionDiv = (name) => {
        if (name) {
            document.getElementById("collectionDiv").style.opacity = 1;
            document.getElementById("collectionDiv").style.marginTop = "50px";
            document.getElementById("collectionDiv").style.height = "500px";
            document.getElementById("collectionDiv").style.padding = "30px";
            document.getElementById("collectionDiv").style.paddingTop = "10px";
            document.getElementById("collectionDiv").style.borderWidth = "1px";
        } else {
            document.getElementById("collectionDiv").style.opacity = 0;
            document.getElementById("collectionDiv").style.marginTop = "100px";
            document.getElementById("collectionDiv").style.height = "0px";
            document.getElementById("collectionDiv").style.padding = "0px";
            document.getElementById("collectionDiv").style.paddingLeft = "30px";
            document.getElementById("collectionDiv").style.paddingRight = "30px";
            document.getElementById("collectionDiv").style.borderWidth = "0px";
        }
    }

    pageDiv = (name) => {
        if (name) {
            document.getElementById("pagesDiv").style.opacity = 1;
            document.getElementById("pagesDiv").style.marginTop = "50px";
            document.getElementById("pagesDiv").style.height = "290px";
            document.getElementById("pagesDiv").style.padding = "30px";
            document.getElementById("pagesDiv").style.paddingTop = "10px";
            document.getElementById("pagesDiv").style.borderWidth = "1px";
        } else {
            document.getElementById("pagesDiv").style.opacity = 0;
            document.getElementById("pagesDiv").style.marginTop = "100px";
            document.getElementById("pagesDiv").style.height = "0px";
            document.getElementById("pagesDiv").style.padding = "0px";
            document.getElementById("pagesDiv").style.paddingLeft = "30px";
            document.getElementById("pagesDiv").style.paddingRight = "30px";
            document.getElementById("pagesDiv").style.paddingTop = "0px";
            document.getElementById("pagesDiv").style.borderWidth = "0px";
        }
    }

    blogDiv = (name) => {
        if (name) {
            document.getElementById("blogDiv").style.opacity = 1;
            document.getElementById("blogDiv").style.marginTop = "50px";
            document.getElementById("blogDiv").style.height = "290px";
            document.getElementById("blogDiv").style.padding = "30px";
            document.getElementById("blogDiv").style.paddingTop = "10px";
            document.getElementById("blogDiv").style.borderWidth = "1px";
        } else {
            document.getElementById("blogDiv").style.opacity = 0;
            document.getElementById("blogDiv").style.marginTop = "100px";
            document.getElementById("blogDiv").style.height = "0px";
            document.getElementById("blogDiv").style.padding = "0px";
            document.getElementById("blogDiv").style.paddingLeft = "30px";
            document.getElementById("blogDiv").style.paddingRight = "30px";
            document.getElementById("blogDiv").style.paddingTop = "0px";
            document.getElementById("blogDiv").style.borderWidth = "0px";
        }
    }

    mobileLoginDiv = (name) => {
        if (name) {
            document.getElementById("mobileLoginDiv").style.opacity = 1;
            document.getElementById("mobileLoginDiv").style.height = "90px";
            document.getElementById("mobileLoginDiv").style.borderWidth = "1px";
        } else {
            document.getElementById("mobileLoginDiv").style.opacity = 0;
            document.getElementById("mobileLoginDiv").style.height = "0px";
            document.getElementById("mobileLoginDiv").style.borderWidth = "0px";
        }
    }

    render() {
        return (
            <div className="header">
                <div className="menu">

                </div>
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
                                        style={{ display: "block", fontSize: 16, marginBottom: 5, fontWeight: 400 }}
                                    >
                                        Email Address:<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
                                    </span>
                                    <input
                                        type="text"
                                    />
                                    <span
                                        style={{ display: "block", fontSize: 16, marginBottom: 5, fontWeight: 400, marginTop: 15 }}
                                    >
                                        Password:<sup style={{ color: "red", fontWeight: "bold" }}>*</sup>
                                    </span>
                                    <input
                                        type="text"
                                    />
                                    <button className="loginButton">
                                        LOGIN
                                        </button>
                                    <button className="loginButton">
                                        CREATE AN ACCOUNT
                                        </button>
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
                    <div className="mobileMenu">
                        <MenuIcon fontSize="large" />
                        <PersonIcon
                            fontSize="large"
                            onMouseOver={() => this.mobileLoginDiv("a")}
                            onMouseOut={() => this.mobileLoginDiv()}
                        />
                        <div id="mobileLoginDiv"
                            onMouseOver={() => this.mobileLoginDiv("a")}
                            onMouseOut={() => this.mobileLoginDiv()}
                        >
                            <p>LOGIN</p>
                            <hr />
                            <p>REGISTER</p>
                        </div>
                        <FavoriteIcon fontSize="large" />
                        <ShoppingCartIcon fontSize="large" /><br />
                        <input
                            type="text"
                            placeholder="search somethig"
                        />
                    </div>
                    <ul className="sndHeaderUl">
                        <div id="collectionDiv"
                            onMouseOver={() => this.collectionDiv("a")}
                            onMouseOut={() => this.collectionDiv()}
                        >
                            <CollectionTable />
                            <img src={CollectionImg} />
                        </div>

                        <div id="pagesDiv"
                            onMouseOver={() => this.pageDiv("a")}
                            onMouseOut={() => this.pageDiv()}
                        >
                            <PageTable />
                        </div>

                        <div id="blogDiv"
                            onMouseOver={() => this.blogDiv("a")}
                            onMouseOut={() => this.blogDiv()}
                        >
                            <BlogList />
                        </div>

                        <li>
                            HOME
                        </li>

                        <li
                            onMouseOver={() => this.collectionDiv("a")}
                            onMouseOut={() => this.collectionDiv()}
                        >
                            COLLECTIONS <ArrowDropDownIcon />
                        </li>
                        <li
                            onMouseOver={() => this.pageDiv("a")}
                            onMouseOut={() => this.pageDiv()}
                        >
                            PAGES <ArrowDropDownIcon />
                        </li>
                        <li
                            onMouseOver={() => this.blogDiv("a")}
                            onMouseOut={() => this.blogDiv()}
                        >
                            BLOG <ArrowDropDownIcon />
                        </li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
