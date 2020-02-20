import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { capitalizeFirstLetters } from '../common/index'
import { add } from '../actions/action';
import firebase from 'firebase'
import head from '../slide-image-caption-1.webp'
import head2 from '../slide-image-caption-2.webp'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from '../home_line.png'
import first from '../collectionImages/first.png'
import second from '../collectionImages/second.png'
import third from '../collectionImages/third.png'
import forth from '../collectionImages/forth.png'
import firstM from '../product images mobile/first.webp'
import secondM from '../product images mobile/second.webp'
import thirdM from '../product images mobile/third.webp'
import forthM from '../product images mobile/forth.webp'
import { Carousel } from 'antd';

class SecondPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 1
        }
    }

    changePath = (name, price) => {
        // console.log(this.props.history)
        this.props.history.push({
            pathname: '/ProductPage',
            state: { img: name, price: price },
        })
    }

    render() {
        return (
            <>
                <div className="mainContainer2">
                    <h6>{this.props.name ? "FEATURED PRODUCTS" : "POPULAR COLLECTIONS"}<br /><img src={logo} /></h6>
                    <div className="collectionDiv">
                        <div
                            onClick={() => this.changePath(first, "249")}
                        >
                            <img src={first} />
                            <h6>BRACELETS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>
                        <div
                            onClick={() => this.changePath(second, "289")}
                        >
                            <img src={second} />
                            <h6>EARINGS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>
                        <div
                            onClick={() => this.changePath(third, "399")}
                        >
                            <img src={third} />
                            <h6>NECKLACES</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>
                        <div
                            onClick={() => this.changePath(forth, "459")}
                        >
                            <img src={forth} />
                            <h6>RINGS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>
                    </div>

                    <Carousel className="collectionDivM" autoplay>
                        <div
                            id="mDiv1"
                            style={{ zIndex: 2, opacity: 1 }}
                            onClick={() => this.changePath(firstM, "249")}
                        >
                            <img src={firstM} />
                            <h6>BRACELETS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>

                        <div
                            id="mDiv2"
                            style={{ zIndex: 1, opacity: 0 }}
                            onClick={() => this.changePath(secondM, "289")}
                        >
                            <img src={secondM} />
                            <h6>BRACELETS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>

                        <div
                            id="mDiv2"
                            style={{ zIndex: 1, opacity: 0 }}
                            onClick={() => this.changePath(thirdM, "399")}
                        >
                            <img src={thirdM} />
                            <h6>BRACELETS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>

                        <div
                            id="mDiv2"
                            style={{ zIndex: 1, opacity: 0 }}
                            onClick={() => this.changePath(forthM, "459")}
                        >
                            <img src={forthM} />
                            <h6>BRACELETS</h6>
                            <hr style={{ width: "15%", backgroundColor: "#a07936", border: "0px", height: 1 }} />
                            <p>See the Collection</p>
                        </div>
                    </Carousel>

                    {/* <div className="collectionDivM">
                        
                    </div> */}
                </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SecondPage));