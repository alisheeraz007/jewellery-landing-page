import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { add } from '../actions/action';
import logo from '../home_line.png'
import news from '../news.webp'
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

class FifthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="mainContainer5">
                <h6>LATEST NEWS<br /><img src={logo} /></h6>
                <div className="newsDiv">

                    <div className="newsImgDiv">
                        <img src={news} />
                    </div>

                    <div className="newsCommentsDiv">
                        <div className="reviewDiv">
                            <div className="dateDiv">
                                <p>JULY</p>
                                <span>03</span>
                            </div>
                            <div className="comment">
                                <h4>Sample Blog Post With Left Slidebar</h4>
                                <span><PersonIcon fontSize="small" /> Sadiq Hanif / <ChatBubbleOutlineIcon fontSize="small" /> 2 Comments</span>
                                <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint....</p>
                            </div>
                        </div>

                        <div className="reviewDiv">
                            <div className="dateDiv">
                                <p>june</p>
                                <span>10</span>
                            </div>
                            <div className="comment">
                                <h4>Vel Illum Qui Dolorem Eum Fugiat</h4>
                                <span><PersonIcon fontSize="small" /> Fardeen Faisal / <ChatBubbleOutlineIcon fontSize="small" /> 4 Comments</span>
                                <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint....</p>
                            </div>
                        </div>

                        <div className="reviewDiv">
                            <div className="dateDiv">
                                <p>june</p>
                                <span>13</span>
                            </div>
                            <div className="comment">
                                <h4>Sample Blog Post Full Width</h4>
                                <span><PersonIcon fontSize="small" /> Ali Sheeraz / <ChatBubbleOutlineIcon fontSize="small" /> 6 Comments</span>
                                <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint....</p>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FifthPage));