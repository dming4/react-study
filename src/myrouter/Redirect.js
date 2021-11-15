import React, { Component } from 'react'

export default class Redirect extends Component {
    constructor(props) {
        super(props)

        window.location.hash = this.props.to
    }

    render() {
        return null
    }
}
