// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import routes from './myrouter/routeconfig'

// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import RouteWithSubRoutes from './myrouter/RouteWithSubRoutes'

// ReactDOM.render(
//     <div>
//         <Router>
//             <Link to="/home">Home</Link>|<Link to="/about">About</Link>|
//             <Link to="/user">User</Link>|<Link to="/user/userAdd">UserAdd</Link>
//             <hr />
//             <br />
//             <Switch>
//                 {routes.map((route, i) => (
//                     <RouteWithSubRoutes key={i} {...route} />
//                 ))}
//             </Switch>
//         </Router>
//     </div>,
//     document.getElementById('root')
// )

/**
 * zero-react
 */
import React from './myreact/react'
/**
 * 01 string
 */
// let element = 'hello react'
// React.render("hello react", document.getElementById('root'))

/**
 * 02 native element
 * https://www.babeljs.cn/
 *
 */

const say = function () {
    alert('hello')
}

// let element = (
//     <div id="xxx">
//         hello react <button onClick={say}>click</button>
//     </div>
// )
// let element = React.createElement(
//     'div',
//     { id: 'xxx', style: 'background-color:red', class: 'name' },
//     'hello react',
//     React.createElement('button', { onClick: say }, 'click')
// )

// console.log(element, 'element')
// React.render(element, document.getElementById('root'))

/**
 * 03 component
 */

class Counter extends React.Component {
    state = { count: 0 }
    componentWillMount() {
        console.log('Counter componentWillMount')
    }
    render() {
        console.log('Counter render')

        // return React.createElement(SubCounter)
        return this.state.count
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
        console.log('Counter componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
}
class SubCounter {
    state = { name: 'subcounter' }
    componentWillMount() {
        console.log('SubCounter componentWillMount')
    }
    render() {
        console.log('SubCounter render')

        return this.state.name
    }
    componentDidMount() {
        console.log('SubCounter componentDidMount')
    }
}

let element = React.createElement(Counter, {})
console.log(element, 'element')
React.render(element, document.getElementById('root'))
