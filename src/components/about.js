import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  }
});

class SimpleGrow extends React.Component {
  state = {
    appear: true,
  };

  render() {
    const { classes } = this.props;
    // const { appear } = this.state;

    const instrumentCard = (
      <Paper elevation={4} className={classes.paper}>
        <div>Hey there</div>
      </Paper>
    );

    return (
      <div className={classes.root}>

        <div className={classes.container}>
          <Grow in={true}>{instrumentCard}</Grow>
          {/* Conditionally applies the timeout property to change the entry speed. */}
          <Grow in={true} {...({timeout: 1000}: {})}>{instrumentCard}</Grow>
          <Grow in={true} {...({timeout: 1400}: {})}>{instrumentCard}</Grow>
        </div>
      </div>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
