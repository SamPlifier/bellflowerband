import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    list: {
        width: '100vw'
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
        background: 'white',
        padding: 0
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 0,
        color: 'white'
    }
};
class TemporaryDrawer extends React.Component {
  state = {
    bottom: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const routeTo = (text) => {
         if (text === 'home') {
             return ''
         } else {
             return text;
         }
    }
    const { classes } = this.props;
    const fullList = (
      <div className={classes.fullList}>
        <List classes={{root: classes.root}} elevation={3}>
          {['about', 'media', 'merch', 'home'].map((text, index) => (
            <ListItem button key={text} >
              <Link component={'button'} className={text} to={`/${routeTo(text)}`}><ListItemText primary={text.toUpperCase()} /></Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className="topNav">
          <div className="smallLogo">
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTE5LjI1N3B4IiBoZWlnaHQ9IjExOS41MTZw%0D%0AeCIgdmlld0JveD0iMCAwIDExOS4yNTcgMTE5LjUxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAw%0D%0AIDAgMTE5LjI1NyAxMTkuNTE2Ig0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9%0D%0AIiNGRkZGRkYiIGQ9Ik02NC42MjgsMC45MDl2MTguMzIyYzMuMjYsMC43MDQsNi41MTIsMi4xMTYs%0D%0AOS4wOTQsNC40MjJjMy45MTQsMy40OTIsNi43ODEsOS4xNTQsNi42NjQsMTUuMTM2DQoJYy0wLjEy%0D%0AMSw2LjI4MS0zLjc4NywxMS43NzYtNC4xNjQsMTguMDQxYy0wLjYzNywxMC41ODEtMC42MzcsMTIu%0D%0AMDI1LDMuMDcsMTkuNDhjMi44NDYsNS43Miw3LjkyOCw5Ljg4MSwxMy4xNjQsNi45OTENCgljLTIu%0D%0AOTEsMy42MTItMTIuOTc3LDcuNDktMTcuMTY4LDUuNjA4Yy0yLjkxNi0xLjMxMi00LjYzOS0zLjI0%0D%0ANi02LjE4LTYuNTg4Yy0xLjY3NCwxLjUzLTIuODgzLDMuNy00LjMyNCw1LjU1OQ0KCWMtMS40NDMs%0D%0AMS44NTgtMy4wMjMsMS44OC01LjEwMiwxLjgwOWMtMi4wNzgsMC4wNzEtMy4yNjgsMC4wNS00Ljcw%0D%0AOS0xLjgwOWMtMS40NDMtMS44NTgtMi42NTItNC4wMjgtNC4zMjYtNS41NTkNCgljLTEuNTQxLDMu%0D%0AMzQyLTMuNjUyLDUuMjc1LTYuNTcsNi41ODhjLTQuMTkxLDEuODgyLTEzLjg2Ny0xLjk5Ni0xNi43%0D%0ANzUtNS42MDhjNS4yMzYsMi44OSwxMC4zMTYtMS4yNzEsMTMuMTYyLTYuOTkxDQoJYzMuNzA3LTcu%0D%0ANDU1LDMuNzA3LTguODk5LDMuMDcyLTE5LjQ4Yy0wLjM3Ny02LjI2NS00LjA0My0xMS43Ni00LjE2%0D%0ANi0xOC4wNDFjLTAuMTE3LTUuOTgxLDIuNzUtMTEuNjQ0LDYuNjY0LTE1LjEzNg0KCWMyLjc5OS0y%0D%0ALjQ5Nyw2LjE4Mi0zLjk0OSw5LjU5NC00LjU4MlYwLjgzM2MtMzAuNzE3LDIuMDYtNTUsMjcuNjEx%0D%0ALTU1LDU4Ljg1MWMwLDMyLjU4NSwyNi40MTYsNTksNTksNTljMzIuNTg2LDAsNTktMjYuNDE1LDU5%0D%0ALTU5DQoJQzExOC42MjgsMjguNzg0LDk0Ljg3LDMuNDUsNjQuNjI4LDAuOTA5Ii8+DQo8L3N2Zz4N%0D%0ACg==" alt="Bellflower silhouette logo"/>
          </div>
        <IconButton onClick={this.toggleDrawer('bottom', true)} anchor="bottom" className={classes.menuButton} classes={{colorInherit: classes.menuButton}} aria-label="Menu" elevation={3}>
            <MenuIcon />
        </IconButton>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}>
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
