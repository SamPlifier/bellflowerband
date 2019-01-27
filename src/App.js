import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import TemporaryDrawer from './components/navbar.js';
import Media from './components/media.js';
import Home from './components/home.js';
import About from './components/about.js';
import Merch from './components/merch.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        secondary: indigo
    },
    status: {
        danger: 'yellow'
    },
    typography: { useNextVariants: true }
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Router>
            <div className="App">
                <TemporaryDrawer />
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/media" component={Media}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/merch" component={Merch}/>
                </div>
            </div>
        </Router>
    </MuiThemeProvider>);
    }
}

export default App;
