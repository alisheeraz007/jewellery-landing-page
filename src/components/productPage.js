import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from '../actions/action';
import { Breadcrumb, Tooltip } from 'antd';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ScrollAnimation from 'react-animate-on-scroll';
import ThirdPage from './ThirdPage';
import SeventhPage from './seventhPage';
import SixthPage from './sixthPage';
import { popularCollection } from '../global'

class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1,
            price: 0,
            netPrice: 0,
        }
    }

    componentWillMount() {
        this.setState({
            img: this.props.history.location.state.img,
            price: this.props.history.location.state.price
        }, () => {
            // console.log(this.props.history)
        })
    }

    changePath = () => {
        this.props.history.push('/')
    }

    gettingValue = (ev, name) => {
        this.setState({
            [name]: ev.target.value ? ev.target.value : 0
        })
    }

    increaseDecrease = (name) => {
        if (name === "increase") {
            let a = this.state.qty;
            a++
            this.setState({
                qty: a,
                netPrice: a * this.state.price
            })
        } else {
            let a = this.state.qty;
            if (a > 0) {
                a--
            }
            this.setState({
                qty: a,
                netPrice: a * this.state.price
            })
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let collection = popularCollection();
        let params = this.props.match.params.id
        let obj = collection.find(a => a.id === params)
        console.log(obj)
    }

    render() {
        return (
            <div>
                <div className="productContainer">
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={this.changePath}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Product</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="productContainerImageDiv">
                    <ScrollAnimation animateOnce duration={2} animateIn="fadeIn">
                        <h2>Curabitur Cursus Dignis</h2>
                        <div className="productContainerImageDivFlex">
                            <div className="productContainerImageDivFlex1" style={{ backgroundImage: `url(${this.state.img})` }}>
                                {/* <img src={this.state.img} style={{ width: "100%", height: "100%" }} /> */}
                            </div>
                            <div className="addCart productContainerImageDivFlex2">
                                <div>
                                    <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: 20 }}>
                                        <tbody>
                                            <tr style={{ height: 60 }}>
                                                <th style={{ fontSize: 18, textAlign: "left" }}>Color</th>
                                                <td style={{ display: "flex" }}>
                                                    <span style={{ display: "inline-block", marginLeft: 10, width: 40, height: 40, backgroundColor: "black", border: "1px solid lightgrey" }}></span>
                                                    <span style={{ display: "inline-block", marginLeft: 10, width: 40, height: 40, backgroundColor: "red", border: "1px solid lightgrey" }}></span>
                                                    <span style={{ display: "inline-block", marginLeft: 10, width: 40, height: 40, backgroundColor: "blue", border: "1px solid lightgrey" }}></span>
                                                    <span style={{ display: "inline-block", marginLeft: 10, width: 40, height: 40, backgroundColor: "purple", border: "1px solid lightgrey" }}></span>
                                                    <span style={{ display: "inline-block", marginLeft: 10, width: 40, height: 40, backgroundColor: "green", border: "1px solid lightgrey" }}></span>
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th style={{ fontSize: 18, textAlign: "left" }}>Size</th>
                                                <td style={{ textAlign: "left" }}>
                                                    <button style={{ width: 80 }}>SMALL</button>
                                                    <button style={{ width: 80 }}>MEDIUM</button>
                                                    <button style={{ width: 80 }}>LARGE</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <hr style={{ background: "lightgrey", border: 0, height: 1 }} />

                                    <div className="productDescription">
                                        <h2 style={{ marginBottom: 5 }}>Product Description</h2>
                                        <p>
                                            Nam libero tempore, cum soluta nobis
                                            est eligendi optio cumque nihil impedit quo minus id
                                            quod maxime placeat facere possimus, omnis amet voluptas
                                          assumenda est, omnis dolor repellendus quis nostrum.<br />
                                            Temporibus autem quibusdam et
                                             aut officiis debitis aut rerum dolorem necessitatibus saepe eveniet ut et neque
                                              porro quisquam est, qui dolorem ipsum quia dolor sit amet
                                              , consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                               incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                                                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                                ut aliquid ex ea commodi consequatur.
                                    </p>
                                    </div>

                                    <hr style={{ background: "lightgrey", border: 0, height: 1 }} />

                                    <div className="quantityDiv" style={{ textAlign: "left", marginTop: 25 }}>
                                        <h4 style={{ fontSize: 16 }}>Quantity</h4>
                                        <div style={{ display: "flex" }}>
                                            <button onClick={() => this.increaseDecrease()}><ArrowLeftIcon /></button>
                                            <input onChange={(ev) => this.gettingValue(ev, "qty")} type="number" value={this.state.qty} />
                                            <button onClick={() => this.increaseDecrease("increase")}><ArrowRightIcon /></button>
                                        </div>

                                        <h1>
                                            ${this.state.price}.00 <span>/ ${Number(this.state.price) + 50}.00</span>
                                        </h1>

                                        <button className="addToCartButton">ADD TO CART</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce duration={2} animateIn="fadeIn">
                        <div className="secondContainer">
                            <ThirdPage name="a" />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateOnce duration={2} animateIn="fadeIn">
                        <div className="secondContainer">
                            <SixthPage />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateOnce duration={2} animateIn="fadeIn">
                        <div className="secondContainer">
                            <SeventhPage />
                        </div>
                    </ScrollAnimation>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));