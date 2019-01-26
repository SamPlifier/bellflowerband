import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home.js';
import NavMenu from './components/navMenu.js';
import Try from './components/try.js';
import Try2 from './components/try2.js';

class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <NavMenu />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/try" component={Try} />
                    <Route exact path="/try2" component={Try2} />
                </div>
            </div>
        </Router>);
    }
}

export default App;
