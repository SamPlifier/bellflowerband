import React from 'react';
import instruments from './instruments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
      flexGrow: 1
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

window.inst = instruments;

class SimpleGrow extends React.Component {
  state = {
    appear: true,
    instrumentList: ['guitar','vocals', 'bass', 'drums', 'auxPercussion', 'keyboard'],
  };

  render() {
    const { classes } = this.props;

    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         console.log(i);
         return <Grid item xs={6} sm={4} key={instrument}><Grow in={true} {...({timeout:500 + (100*[i]) }: {})}><Paper elevation={4} className={classes.paper}><div className="instrumentImgContainer"><img className="instrumentImage" alt={i} src={instruments[instrument]} /></div></Paper></Grow></Grid>;
     })
    )

    return (
        <Grid container spacing={24} className="aboutContainer">
            {instrumentList}
        </Grid>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
