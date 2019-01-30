import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'background: linear-gradient(-135deg, teal, #1d2d86);'
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <footer className="footer">
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>THIRD</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>THIRD</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>THIRD</Paper>
                </Grid>
            </Grid>
        </div>
    </footer>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
