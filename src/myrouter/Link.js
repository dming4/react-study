import React, { Component } from 'react'

export default class Link extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div>
                <a onClick={(e) => this.handleClick(e, this.props.to)}>
                    {this.props.children}
                </a>
            </div>
        )
    }
    handleClick = (e, to) => {
        window.location.hash = to
    }
}
