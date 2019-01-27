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
        width: 'auto'
    },
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 20
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
        <List>
          {['about', 'media', 'merch', 'home'].map((text, index) => (
            <ListItem button key={text}>
              <Link component={'button'} className={text} to={`/${routeTo(text)}`}><ListItemText primary={text.toUpperCase()} /></Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className="topNav">
        <IconButton onClick={this.toggleDrawer('bottom', true)} anchor="bottom" className={classes.menuButton} color="default" aria-label="Menu">
            <MenuIcon color="primary"/>
          </IconButton>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
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
