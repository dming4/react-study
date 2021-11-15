import React from 'react'
import Home from '../Home'
import About from '../About'
import { Consumer } from './context'
export default function Route(props) {
    console.log('Route.render')

    return (
        <div>
            <Consumer>
                {(location) => {
                    const { path, component, exact } = props

                    if (exact && location.path == path) {
                        console.log('Route精确匹配到', path)
                        console.log('Route匹配到', path)
                        // return <component x={1}></component>
                        return React.createElement(component)
                    }

                    if (!exact && location.path.includes(path)) {
                        console.log('Route精确匹配到', path)
                        // return <div>{to}</div>
                        // return <component y={1}></component>
                        return React.createElement(component)
                    }
                }}
            </Consumer>
        </div>
    )
}
