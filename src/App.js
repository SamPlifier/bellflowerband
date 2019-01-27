import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ButtonAppBar from './components/navbar.js';
import NavMenu from './components/navMenu.js';
import Home from './components/home.js';
import Try from './components/try.js';
import Try2 from './components/try2.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: grey
    },
    status: {
        danger: 'yellow'
    }
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Router>
            <div className="App">
                <NavMenu/>
                <ButtonAppBar />
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/try" component={Try}/>
                    <Route exact path="/try2" component={Try2}/>
                </div>
            </div>
        </Router>
    </MuiThemeProvider>);
    }
}

export default App;
