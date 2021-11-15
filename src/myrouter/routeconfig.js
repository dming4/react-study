import Home from '../Home'
import About from '../About'

import User from '../User'

import UserAdd from '../UserAdd'
import UserList from '../UserList'

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/user',
        component: User,
        routes: [
            {
                path: '/user/userAdd',
                component: UserAdd,
            },
            {
                path: '/user/userList',
                component: UserList,
            },
            // {
            //     path: '/    ',
            //     component: UserList,
            // },
        ],
    },
    {
        path: '/',
        component: Home,
    },
]

export default routes
