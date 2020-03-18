import React, { Component } from 'react';
import one from '../allimages/one.jpg'
import two from '../allimages/two.jpg'
import three from '../allimages/three.jpg'
import fourth from '../allimages/fourth.jpg'
import fifth from '../allimages/fifth.jpg'
import sixth from '../allimages/sixth.jpg'
import seven from '../allimages/seven.jpg'
import eight from '../allimages/eight.jpg'
import nine from '../allimages/nine.jpg'
import { withRouter } from 'react-router-dom';

class ImagesView extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onMouseOver = (id) => {
        document.getElementById(id).style.height = "360px"
        document.getElementById(id + "i").style.height = "90px"
    }

    onMouseOut = (id) => {
        document.getElementById(id).style.height = "450px"
        document.getElementById(id + "i").style.height = "0px"
    }

    onMouseOver2 = (id) => {
        document.getElementById(id).style.height = "320px"
        document.getElementById(id + "i").style.height = "90px"
    }

    onMouseOut2 = (id) => {
        document.getElementById(id).style.height = "410px"
        document.getElementById(id + "i").style.height = "0px"
    }

    changeRoute = (ev) => {
        let id = ""
        if (ev.target.nodeName === "P" || ev.target.nodeName === "H3") {
            id = ev.target.parentNode.parentNode.id
        } else {
            id = ev.target.parentNode.id
        }
        this.props.history.push(`/${id}/home`)
    }

    render() {
        return (
            <div className="imagesViewDiv">

                <div className="bigImageDiv">
                    <div
                        id="1"
                        onMouseOver={(ev) => this.onMouseOver("1")}
                        onMouseOut={(ev) => this.onMouseOut("1")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${one})` }}
                    >
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("1")}
                        onMouseOut={(ev) => this.onMouseOut("1")}
                        className="content"
                        id="1i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>CONCRETE HOUSE</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv">
                    <div
                        id="2"
                        onMouseOver={(ev) => this.onMouseOver2("2")}
                        onMouseOut={(ev) => this.onMouseOut2("2")}
                        className="smallImage"
                        style={{ backgroundImage: `url(${two})` }}
                    ></div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("2")}
                        onMouseOut={(ev) => this.onMouseOut2("2")}
                        className="content"
                        id="2i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>ART HOTEL</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="bigImageDiv">
                    <div
                        id="3"
                        onMouseOver={(ev) => this.onMouseOver("3")}
                        onMouseOut={(ev) => this.onMouseOut("3")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${three})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("3")}
                        onMouseOut={(ev) => this.onMouseOut("3")}
                        className="content"
                        id="3i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>SPRING STUDIOS</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="bigImageDiv largScreenPlus">
                    <div
                        id="4"
                        onMouseOver={(ev) => this.onMouseOver("4")}
                        onMouseOut={(ev) => this.onMouseOut("4")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${fourth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("4")}
                        onMouseOut={(ev) => this.onMouseOut("4")}
                        className="content"
                        id="4i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>A STUDIO</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv">
                    <div
                        id="5"
                        onMouseOver={(ev) => this.onMouseOver2("5")}
                        onMouseOut={(ev) => this.onMouseOut2("5")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${fifth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("5")}
                        onMouseOut={(ev) => this.onMouseOut2("5")}
                        className="content"
                        id="5i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>CO-WORKING</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="bigImageDiv largScreenPlus">
                    <div
                        id="6"
                        onMouseOver={(ev) => this.onMouseOver("6")}
                        onMouseOut={(ev) => this.onMouseOut("6")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${sixth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("6")}
                        onMouseOut={(ev) => this.onMouseOut("6")}
                        className="content"
                        id="6i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>ROOF GARDEN</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv largScreenPlus">
                    <div
                        id="7"
                        onMouseOver={(ev) => this.onMouseOver2("7")}
                        onMouseOut={(ev) => this.onMouseOut2("7")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${seven})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("7")}
                        onMouseOut={(ev) => this.onMouseOut2("7")}
                        className="content"
                        id="7i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>PUBLIC HOUSING</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="bigImageDiv largeImageMinus">
                    <div
                        id="8"
                        onMouseOver={(ev) => this.onMouseOver("8")}
                        onMouseOut={(ev) => this.onMouseOut("8")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${eight})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("8")}
                        onMouseOut={(ev) => this.onMouseOut("8")}
                        className="content"
                        id="8i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>STREET HOUSE</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv largScreenPlus">
                    <div
                        id="9"
                        onMouseOver={(ev) => this.onMouseOver2("9")}
                        onMouseOut={(ev) => this.onMouseOut2("9")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${nine})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("9")}
                        onMouseOut={(ev) => this.onMouseOut2("9")}
                        className="content"
                        id="9i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>THE CINEROLEUM</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv largScreenPlus">
                    <div
                        id="10"
                        onMouseOver={(ev) => this.onMouseOver2("10")}
                        onMouseOut={(ev) => this.onMouseOut2("10")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${fourth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("10")}
                        onMouseOut={(ev) => this.onMouseOut2("10")}
                        className="content"
                        id="10i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>A STUDIO</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="bigImageDiv">
                    <div
                        id="11"
                        onMouseOver={(ev) => this.onMouseOver("11")}
                        onMouseOut={(ev) => this.onMouseOut("11")}
                        className="bigImage"
                        style={{ backgroundImage: `url(${fifth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver("11")}
                        onMouseOut={(ev) => this.onMouseOut("11")}
                        className="content"
                        id="11i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>CO-WORKING</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

                <div className="smallImageDiv largScreenPlus">
                    <div
                        id="12"
                        onMouseOver={(ev) => this.onMouseOver2("12")}
                        onMouseOut={(ev) => this.onMouseOut2("12")}
                        className="smallImage"
                        style={{ backgroundImage: `url(${sixth})` }}>
                    </div>
                    <div
                        onMouseOver={(ev) => this.onMouseOver2("12")}
                        onMouseOut={(ev) => this.onMouseOut2("12")}
                        className="content"
                        id="12i"
                    >
                        <div style={{ width: "100%" }} onClick={(ev) => this.changeRoute(ev)}>
                            <h3>ROOF GARDEN</h3>
                            <p>ARCHITECTURE</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(ImagesView);
