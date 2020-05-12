import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { capitalizeFirstLetters } from '../common/index'
import { add } from '../actions/action';
import logo from '../home_line.png'
import first from '../productsimages/first.webp'
import second from '../productsimages/second.jpg'
import third from '../productsimages/third.jpg'
import forth from '../productsimages/forth.jpg'
import fifth from '../productsimages/fifth.jpg'
import sixth from '../productsimages/sixth.jpg'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

import { popularCollection } from '../global'


class ThirdPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 1
        }
    }

    divHover = (index, name) => {
        // if (name) {
        //     console.log(index)
        //     document.getElementById(`productReview${index}`).style.opacity = 1
        // } else {
        //     console.log(index)

        //     document.getElementById(`productReview${index}`).style.opacity = 0
        // }
    }

    changePath = (name, price, ev, item) => {
        let id = ""
        if (ev.target.nodeName !== "SPAN") {
            id = ev.target.parentNode.id
        } else {
            id = ev.target.id
        }
        if (id !== "abcd") {
            this.props.history.push({
                pathname: `/ProductPage/${item.id}`,
                state: { img: name, price: price },
            })
        }
    }

    render() {
        let collection = popularCollection().filter(a => a.popolarity === "new")
        // console.log(this.props.names)
        return (
            <>
                <div className="mainContainer3">
                    <h6>{this.props.name ? "RELATED PRODUCTS" : "NEW PRODUCTS"}<br /><img src={logo} /></h6>
                    <div className="productList">
                        {/* <div
                            onMouseOver={() => this.divHover(1, "a")}
                            onMouseOut={() => this.divHover(1)}
                            onClick={(ev) => this.changePath(first, "399", ev)}
                        >
                            <span className="productImage" style={{ backgroundImage: `url(${first})` }}>

                            </span>
                            <span id="productReview1">
                                <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                            </span>
                            <span className="title">
                                <p className="titlep">Curabitur cursus designs</p>
                                <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                            </span>
                            <span className="price">
                                <p className="cPrice">$259.00</p>
                                <p className="sPrice">$300.00</p>
                            </span>
                        </div>

                        <div
                            onMouseOver={() => this.divHover(2, "a")}
                            onMouseOut={() => this.divHover(2)}
                            onClick={(ev) => this.changePath(second, "399", ev)}
                        >
                            <span className="productImage" style={{ backgroundImage: `url(${second})` }}>

                            </span>
                            <span id="productReview2">
                                <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                            </span>
                            <span className="title">
                                <p className="titlep">Curabitur cursus designs</p>
                                <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                            </span>
                            <span className="price">
                                <p className="cPrice">$259.00</p>
                            </span>
                        </div>

                        <div
                            onMouseOver={() => this.divHover(3, "a")}
                            onMouseOut={() => this.divHover(3)}
                            onClick={(ev) => this.changePath(third, "399", ev)}
                        >
                            <span className="productImage" style={{ backgroundImage: `url(${third})` }}>

                            </span>
                            <span id="productReview3">
                                <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                            </span>
                            <span className="title">
                                <p className="titlep">Curabitur cursus designs</p>
                                <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                            </span>
                            <span className="price">
                                <p className="cPrice">$259.00</p>
                                <p className="sPrice">$300.00</p>
                            </span>
                        </div> */}

                        {/* {!this.props.name ?
                            <>
                                <div
                                    onMouseOver={() => this.divHover(4, "a")}
                                    onMouseOut={() => this.divHover(4)}
                                    onClick={(ev) => this.changePath(forth, "399", ev)}
                                >
                                    <span className="productImage" style={{ backgroundImage: `url(${forth})` }}>

                                    </span>
                                    <span id="productReview4">
                                        <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                        <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                        <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                                    </span>
                                    <span className="title">
                                        <p className="titlep">Curabitur cursus designs</p>
                                        <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                                    </span>
                                    <span className="price">
                                        <p className="cPrice">$259.00</p>
                                    </span>
                                </div>

                                <div
                                    onMouseOver={() => this.divHover(5, "a")}
                                    onMouseOut={() => this.divHover(5)}
                                    onClick={(ev) => this.changePath(fifth, "399", ev)}
                                >
                                    <span className="productImage" style={{ backgroundImage: `url(${fifth})` }}>

                                    </span>
                                    <span id="productReview5">
                                        <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                        <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                        <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                                    </span>
                                    <span className="title">
                                        <p className="titlep">Curabitur cursus designs</p>
                                        <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                                    </span>
                                    <span className="price">
                                        <p className="cPrice">$259.00</p>
                                        <p className="sPrice">$300.00</p>
                                    </span>
                                </div>

                                <div
                                    onMouseOver={() => this.divHover(6, "a")}
                                    onMouseOut={() => this.divHover(6)}
                                    onClick={(ev) => this.changePath(sixth, "399", ev)}
                                >
                                    <span className="productImage" style={{ backgroundImage: `url(${sixth})` }}>

                                    </span>
                                    <span id="productReview6">
                                        <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                        <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                        <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                                    </span>
                                    <span className="title">
                                        <p className="titlep">Curabitur cursus designs</p>
                                        <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                                    </span>
                                    <span className="price">
                                        <p className="cPrice">$259.00</p>
                                        <p className="sPrice">$300.00</p>
                                    </span>
                                </div>
                            </>
                            : null} */}

                        {collection.map((item, index) => {
                            return (
                                <div
                                    className="zoomer"
                                    onClick={(ev) => this.changePath(item.image, "399", ev, item)}
                                >
                                    <span className="productImage" style={{ backgroundImage: `url(${item.image})` }}>

                                    </span>
                                    <span id="productReview">
                                        <span className="icon1"><FormatListBulletedIcon fontSize="sm" /></span>
                                        <span id="abcd" className="icon2"><VisibilityOutlinedIcon id="abcd" fontSize="sm" /></span>
                                        <span className="icon3"><FavoriteOutlinedIcon fontSize="sm" /></span>
                                    </span>
                                    <span className="title">
                                        <p className="titlep">{item.title}</p>
                                        <p><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarIcon style={{ color: "#a07936" }} /><StarHalfIcon style={{ color: "#a07936" }} /></p>
                                    </span>
                                    <span className="price">
                                        <p className="cPrice">{item.salePrice}</p>
                                        <p className="sPrice">{item.originalPrice}</p>
                                    </span>
                                </div>
                            )
                        })}

                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ThirdPage));