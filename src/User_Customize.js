import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from './router/react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
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
                <Route path="/user/userAdd" component={UserAdd}></Route>
                <Route path="/user/userList" component={UserList}></Route>
                {/* <Redirect to="/user/userList"></Redirect> */}
            </div>
        )
    }
}
