import React, { Component } from 'react'
import { Badge } from '@material-ui/core'


class BlogList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
            <p>BLOG GRID 3 COLUMNS</p>
            <p>BLOG GRID 2 COLUMNS</p>
            <p>BLOG GRID FULL WIDTH</p>
            <p>BLOG-LEFT SIDEBAR</p>
            <p>BLOG-RIGHT SIDEBAR</p>
            <p>POST FULL WIDTH</p>
            <p>POST-LEFT SIDEBAR</p>
            <p>POST-RIGHT SIDEBAR</p>
            </>
        )
    }
}

export default BlogList;