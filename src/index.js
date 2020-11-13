import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Rainbow from './components/Rainbow'

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(
        <Root />,
        document.getElementById('root'),
    );
});


const Root = () => (
    <BrowserRouter>
        <Rainbow />
    </BrowserRouter>
)