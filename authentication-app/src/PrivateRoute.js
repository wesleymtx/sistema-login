import React from 'react'

import { Route, Redirect } from 'react-router'

const PrivateRoute = parametro => {
    console.log(parametro)
    const isLogged = localStorage.getItem('app-token')
    return isLogged ? <Route {...parametro}/> : <Redirect to="/login"/>
}

export default PrivateRoute;