import React, { Component } from 'react'
import { Provider } from './context'
import PropTypes from 'prop-types'

export default class HashRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                path: window.location.hash.slice(1) || '/',
            },
        }
        // console.log('HashRouter')
        // console.log('location', window.location)
    }

    render() {
        return (
            <Provider value={this.state.location}>
                {this.props.children}
            </Provider>
        )
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            console.log(
                '监听hashchange新的path',
                window.location.hash.slice(1) || '/'
            )
            this.setState({
                location: {
                    path: window.location.hash.slice(1) || '/',
                },
            })
        })
        window.location.hash = window.location.hash || '/'
    }
}
