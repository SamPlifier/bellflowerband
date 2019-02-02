import React from 'react';
import instruments from './instruments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
    constructor(props) {
        super(props);
        this.bandMemberClick = this.bandMemberClick.bind(this);
    }
  state = {
    appear: true,
    instrumentList: ['guitar', 'voice', 'bass', 'drums', 'percussion', 'keyboard'],
    instrumentData: instruments,
  };
  bandMemberClick(e) {
      let classList = e.currentTarget.className;
      switch (classList.slice(classList.lastIndexOf(' '))) {
          case 'guitar':
              console.log('create franklin details modal');
              break;
              case 'voice':
              console.log('create natashas details modal');
              break;
              case 'bass':
              console.log('create davids details modal');
              break;
              case 'drums':
              console.log('create jeffs details modal');
              break;
              case 'percussion':
              console.log('create cindys details modal');
              break;
              case 'keyboard':
              console.log('create sams details modal');
              break;
          default:

      }
  }

  render() {
    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         return <Grid item xs={6} sm={4} key={instrument} className={`card ` + instrument.toLowerCase()} onClick={this.bandMemberClick.bind(instrument)}>
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
                    <Typography className="description">Paleo selvage leggings etsy. Unicorn viral williamsburg mlkshk woke DIY la croix poke try-hard raclette thundercats hammock kombucha blog selfies. Authentic celiac copper mug mumblecore. Cred typewriter keffiyeh coloring book franzen ugh street art single-origin coffee hell of pok pok. Squid everyday carry taiyaki, actually disrupt snackwave distillery jianbing adaptogen kombucha. Single-origin coffee pitchfork kickstarter actually, truffaut chia small batch sustainable vice slow-carb. Health goth shabby chic chia glossier helvetica small batch..</Typography>
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
