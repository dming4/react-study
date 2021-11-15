import React, { Component } from 'react'

import { Route } from 'react-router-dom'

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export default function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={(props) => (
                // React.createElement(route.component, {
                //     a: 2,
                //     routes: route.routes,
                //     ...props,
                // })
                <route.component {...{ routes: route.routes, ...props }} />
            )}
        />
    )
}
