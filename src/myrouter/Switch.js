import React, { Component } from 'react'
import { Consumer } from './context'
import Redirect from './Redirect'
import Route from './Route'

export default class Switch extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log('Switch.render')
        // return <div>{this.props.children[0]}</div>
        return (
            <Consumer>
                {(state) => {
                    // debugger
                    for (let i = 0; i < this.props.children.length; i++) {
                        const child = this.props.children[i]

                        const path = child.props.path || ''
                        console.log(path)
                        if (window.location.hash.slice(1).includes(path)) {
                            console.log('Switch 匹配成功', path)
                            return child
                        }
                        if (child.type === Redirect) {
                            return child
                        }
                    }
                }}
            </Consumer>
        )
    }
}
