import React, { Component } from 'react'
import { Badge } from '@material-ui/core'


class CollectionTable extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <table>
                <tr style={{paddingTop: 0}}>
                    <td>COLLECTION LINKS</td>
                    <td>COLLECTION LINKS</td>
                    <td>COLLECTION LINKS</td>
                    <td>COLLECTION LINKS</td>
                </tr>
                <tr className="tds">
                    {[1, 2, 3, 4].map((a) => {
                        return (
                            <td key={a}>
                                DOLOREM SED
                            </td>
                        )
                    })}
                </tr>
                <tr className="tds">
                    {[1, 2, 3, 4].map((a) => {
                        return (
                            <td key={a}>PRODENT NULLA</td>
                        )
                    })}
                </tr>
                <tr className="tds">
                    {[1, 2, 3, 4].map((a) => {
                        return (
                            <td key={a}>PHASELLUS LEO</td>
                        )
                    })}
                </tr>
                <tr className="tds">
                    {[1, 2, 3, 4].map((a) => {
                        return (
                            <td key={a}>TRISTIQUE AMET</td>
                        )
                    })}
                </tr>
            </table>
        )
    }
}

export default CollectionTable;