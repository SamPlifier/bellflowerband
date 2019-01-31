import React from 'react';
import instruments from './instruments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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

class SimpleGrow extends React.Component {
  state = {
    appear: true,
    instrumentList: ['guitar', 'voice', 'bass', 'drums', 'handpercussion', 'keyboard'],
    instrumentData: instruments
  };

  render() {
    const { classes } = this.props;
    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         return <Grid item xs={6} sm={4} key={instrument}>
             <Grow in={true} {...({timeout:500 + (100*[i*4]) }: {})}>
                 <Paper elevation={4} className={classes.paper}>
                     <div className="instrumentImgContainer">
                         <img className="instrumentImage" alt={i} src={this.state.instrumentData[instrument].svg} />
                     </div>
                     <Divider />
                     <Typography className="instrumentName">{instrument.toUpperCase()}</Typography>
                     <Typography >{this.state.instrumentData[instrument].musician}</Typography>
                 </Paper>
             </Grow>
         </Grid>;
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
