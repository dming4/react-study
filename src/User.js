import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import RouteWithSubRoutes from './myrouter/RouteWithSubRoutes'
export default class User extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                User Page
                <hr />
                <Link to="/user/userAdd">User Add</Link>
                <Link to="/user/userList">User List</Link>
                <Switch>
                    {this.props.routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}

                    <Redirect to="/user/userList"></Redirect>
                </Switch>
            </div>
        )
    }
}
