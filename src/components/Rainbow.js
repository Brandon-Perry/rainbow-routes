import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';
import Violet from './Violet'

const Rainbow = () => (
    <div>
        <h1>Rainbow Router!</h1>
            <NavLink exact to='/green' activeClassName='parent-active'>Green</NavLink>
            <NavLink exact to='/red' activeClassName='parent-active'>Red</NavLink>
            <NavLink exact to='/blue' activeClassName='parent-active'>Blue</NavLink>
            <NavLink exact to='/violet' activeClassName='parent-active'>Violet</NavLink>
        <div id='rainbow'>
            <Route path='/red' component={Red} />
            <Route path='/green' component={Green} />
            <Route path='/blue' component={Blue} />
            <Route path='/violet' component={Violet} />
        </div>
    </div>
)

export default Rainbow