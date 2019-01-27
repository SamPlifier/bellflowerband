import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <Link to="/"/>
            <Link to="/try"/>
            <Link to="/try2"/>
        </div>
    )
}

export default NavMenu;
