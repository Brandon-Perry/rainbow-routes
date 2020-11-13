import React from 'react';
import { Route, Link, NavLink, Redirect } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow'

const Red = () => (
    <div>
        <h2 className='red'>Red</h2>
        <Route path='/red/orange' component={Orange} />
        <Route path='/red/yellow' component={Yellow} />
        <NavLink exact to='/red'>Red only</NavLink>
        <NavLink exact to='/red/orange'>Add Orange</NavLink>
        <NavLink exact to='/red/yellow'>Add Yellow</NavLink>
    </div>
);

export default Red;