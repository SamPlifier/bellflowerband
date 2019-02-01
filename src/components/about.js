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
  }
});

class SimpleGrow extends React.Component {
  state = {
    appear: true,
    instrumentList: ['guitar', 'voice', 'bass', 'drums', 'percussion', 'keyboard'],
    instrumentData: instruments
  };

  render() {
    // const { classes } = this.props;
    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         return <Grid item xs={6} sm={4} key={instrument} className="card">
             <Grow in={true} {...({timeout:500 + (100*[i*4]) }: {})}>
                 <div >
                     <div className="instrumentImgContainer">
                         <img className="instrumentImage" alt={i} src={this.state.instrumentData[instrument].svg} />
                     </div>
                     <Typography className="instrumentName">{instrument.toUpperCase()}</Typography>
                     <Typography className="musician">{this.state.instrumentData[instrument].musician}</Typography>
                </div>
             </Grow>
         </Grid>;
     })
    )

    return (
        <section className="aboutPageContainer">
            <div className="aboutPage">
                <Paper elevation={0} className="aboutBand">
                    <Typography className="title">About Bellflower</Typography>
                    <Typography className="description">We're a highly collaborative group of musicians that bring and blend our different ideas together in every sgon we write. We play all original music and during our shows, you'll hear solos from everyone- meaning that guitar, bass, drums, percussion, keyboards, trumpet and voice will be heard.</Typography>
                </Paper>
                <Grid container spacing={24} className="instrumentGrid">
                    {instrumentList}
                </Grid>
            </div>
        </section>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
