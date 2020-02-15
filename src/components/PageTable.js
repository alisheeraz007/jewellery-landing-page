import React, { Component } from 'react'
import { Badge } from '@material-ui/core'


class PageTable extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <table>
                <tr style={{paddingTop: 0}}>
                    <td>PAGE LAYOUT</td>
                    <td>PAGE CONTENT</td>
                </tr>
                <tr className="tds">
                    <td>COLLECTION FULL WIDTH</td>
                    <td>ABOUT</td>
                </tr>
                <tr className="tds">
                    <td>COLLECTION-LEFT SIDEBAR</td>
                    <td>PRICE TABLE</td>
                </tr>
                <tr className="tds">
                    <td>COLLECTION-RIGHT SIDEBAR</td>
                    <td>FAQS</td>
                </tr>
                <tr className="tds">
                    <td>PRODUCT FULL WIDTH</td>
                    <td>TESTIMONIAL</td>
                </tr>
                <tr className="tds">
                    <td>PRODUCT-LEFT SIDEBAR</td>
                    <td>NEW PRODUCT INTRODUCTION</td>
                </tr>
                <tr className="tds">
                    <td>PRODUCT-RIGHT SIDEBAR</td>
                    <td>CONTACT</td>
                </tr>
            </table>
        )
    }
}

export default PageTable;