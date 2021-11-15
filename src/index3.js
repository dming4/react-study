import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import About from './About'
import './index.css'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from './router/react-router-dom'
import News from './News'
import User from './User'

let obj = { a: 1, b: 2 }
let x = { c: 2, ...obj }
ReactDOM.render(
    <div>
        <Router d="3" {...{ c: 2 }}>
            <Link to="/home">Home</Link>|<Link to="/about">About</Link>|
            <Link to="/user">User</Link>|<Link to="/user/userAdd">UserAdd</Link>
            <hr />
            <Switch>
                {/* <Route path="/home" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/about" component={About}></Route> */}
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/user" component={User}></Route>
                {/* <Route exact={true} path="/about" component={About}></Route> */}
                {/* <Route path="/news" component={News}></Route> */}
                {/* <Redirect to="/news"></Redirect> */}
            </Switch>
        </Router>
    </div>,
    document.getElementById('root')
)
