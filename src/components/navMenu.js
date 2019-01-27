import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const NavMenu = () => {
    return (
        <div>
            <Link to ="/"><button>home</button></Link>
            <Link to ="/try"><button>try</button></Link>
            <Link to ="/try2"><button>try2</button></Link>
        </div>
    )
}

export default NavMenu;
