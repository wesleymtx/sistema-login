import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/login/'
import Register from './pages/register'
import Home from './pages/home'
import PrivateRoute from './PrivateRoute'
function Routes(){
    return <div>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/" exact component={Home} />
            </Switch>        
        </BrowserRouter>
        </div>
    
};

export default Routes;