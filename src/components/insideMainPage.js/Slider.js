import React, { Component } from 'react';
import img1 from '../allimages/sliderImage1.jpg';
import img2 from '../allimages/sliderImage2.jpg';


class Sllider extends Component {
    constructor() {
        super()
        this.state = {
            slide: 1
        }
    }

    setSlide = (val) => {
        this.setState({
            slide: val
        }, () => {
            if (this.state.slide === 1) {
                document.getElementById("slider1").style.opacity = 1;
                document.getElementById("slider2").style.opacity = 0;
                document.getElementById("sliderCircle1").style.backgroundColor = "white";
                document.getElementById("sliderCircle1").style.width = "16px";
                document.getElementById("sliderCircle1").style.height = "16px";
                document.getElementById("sliderCircle2").style.backgroundColor = "rgba(255,255,255,0.3)";
                document.getElementById("sliderCircle2").style.width = "12px";
                document.getElementById("sliderCircle2").style.height = "12px";
            } else {
                document.getElementById("slider1").style.opacity = 0;
                document.getElementById("slider2").style.opacity = 1;
                document.getElementById("sliderCircle2").style.backgroundColor = "white";
                document.getElementById("sliderCircle2").style.width = "16px";
                document.getElementById("sliderCircle2").style.height = "16px";
                document.getElementById("sliderCircle1").style.backgroundColor = "rgba(255,255,255,0.3)";
                document.getElementById("sliderCircle1").style.width = "12px";
                document.getElementById("sliderCircle1").style.height = "12px";
            }
        })
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                slide: this.state.slide === 1 ? 2 : 1
            }, () => {
                if (this.state.slide === 1) {
                    document.getElementById("slider1").style.opacity = 1;
                    document.getElementById("slider2").style.opacity = 0;
                    document.getElementById("sliderCircle1").style.backgroundColor = "white";
                    document.getElementById("sliderCircle1").style.width = "16px";
                    document.getElementById("sliderCircle1").style.height = "16px";
                    document.getElementById("sliderCircle2").style.backgroundColor = "rgba(255,255,255,0.3)";
                    document.getElementById("sliderCircle2").style.width = "12px";
                    document.getElementById("sliderCircle2").style.height = "12px";
                } else {
                    document.getElementById("slider1").style.opacity = 0;
                    document.getElementById("slider2").style.opacity = 1;
                    document.getElementById("sliderCircle2").style.backgroundColor = "white";
                    document.getElementById("sliderCircle2").style.width = "16px";
                    document.getElementById("sliderCircle2").style.height = "16px";
                    document.getElementById("sliderCircle1").style.backgroundColor = "rgba(255,255,255,0.3)";
                    document.getElementById("sliderCircle1").style.width = "12px";
                    document.getElementById("sliderCircle1").style.height = "12px";
                }
            })
        }, 5000)
    }

    render() {
        return (
            <div className="sliderDiv">
                <div className="sliderImage1" id="slider1" style={{ backgroundImage: `url(${img1})` }}>
                    <h1>beauty & Strength</h1>
                    <p>
                        Maison is a modern & carefully designed theme geared towards all architecture <br />
                        and interior design oriented businesses
                    </p>
                    <div className="sliderCircleDiv">
                        <div onClick={() => this.setSlide(1)} className="sliderCircle1" id="sliderCircle1"></div>
                        <div onClick={() => this.setSlide(2)} className="sliderCircle2" id="sliderCircle2"></div>
                    </div>
                </div>
                <div className="sliderImage2" id="slider2" style={{ backgroundImage: `url(${img2})` }}>
                    <h1>Imagine incredible</h1>
                    <p>
                        Maison is a modern & carefully designed theme geared towards all architecture  <br />
                        and interior design oriented businesses
                    </p>
                    <div className="sliderCircleDiv">
                        <div onClick={() => this.setSlide(1)} className="sliderCircle1" id="sliderCircle1"></div>
                        <div onClick={() => this.setSlide(2)} className="sliderCircle2" id="sliderCircle2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sllider;
