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
// let element = 'hello react'
// React.render("hello react", document.getElementById('root'))

// let element = <div id='xxx'>hello react <button>click</button></div>

/**
 *
 * https://www.babeljs.cn/
 *
 */
let element = React.createElement(
    'div',
    { id: 'xxx' },
    'hello react',
    React.createElement('button', {}, 'click')
)
console.log(element, 'element')
React.render(element, document.getElementById('root'))
let element1 = React.createElement(
    'div',
    { id: 'data-reactid1' },
    'hello world',
    React.createElement('span', {}, '你好'),
    React.createElement('button', {}, 'click me')
)
console.log(element1, 'element1')
