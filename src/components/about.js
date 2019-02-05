import React from 'react';
import instruments from './instruments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

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

class About extends React.Component {
    constructor(props) {
        super(props);
        this.bandMemberClick = this.bandMemberClick.bind(this);
    }
  state = {
    appear: true,
    instrumentList: ['guitar', 'voice', 'bass', 'drums', 'percussion', 'keyboard'],
    instrumentData: instruments,
    open: false,
    musiciansModal: null,
    musicianName: null,
    musicianPhoto: null,
    musicianDescription: null
  };
  bandMemberClick(e) {
      let classList = e.currentTarget.className;
      let name = e.currentTarget.dataset.idMusician;
      let photo = e.currentTarget.dataset.idImgurl;
      let description = e.currentTarget.dataset.idDescription
      console.log(photo);
      let role = classList.slice(classList.lastIndexOf(' '));
      this.setState({
          musiciansModal: role,
          musicianName: name,
          musicianPhoto: photo,
          musicianDescription: description,
          open: true
      })
  }
    handleClose = () => {
        this.setState({open: false});
    };
  render() {
    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         return <Grid item xs={6} sm={4} key={instrument} data-id-musician={this.state.instrumentData[instrument].musician} data-id-imgurl={this.state.instrumentData[instrument].photo} className={`card ${instrument.toLowerCase()}`} data-id-description={this.state.instrumentData[instrument].description} onClick={this.bandMemberClick.bind(instrument)} >
             <Grow in={true} {...({timeout:500 + (100*[i*4]) }: {})} >
                 <div>
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

                    <Typography className="description">Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsay and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore. Collaborative writing processes and weekly rehearsals are the main ingredients in creating their lively,{'\u00A0'}polished{'\u00A0'}performances.</Typography>
                </Paper>
                <div className="bandPhotoContainer"></div>
                <Grid container spacing={24} className="instrumentGrid">
                    {instrumentList}
                </Grid>
                <div className="modal"></div>
                    <Modal aria-labelledby="bellflower member details" aria-describedby="bellflower member details" open={this.state.open} onClose={this.handleClose}>
                        <section className="imgAndInfoContainer">
                            <div className="bandMemberImgContainer"><img alt="anything" src={this.state.musicianPhoto}/></div>
                            <div className="bandMemberInfoContainer">
                                    <h4>{this.state.musicianName}</h4>
                                    <h4>{this.state.musiciansModal}</h4>
                                    <p>{this.state.musicianDescription}</p>
                            </div>
                        </section>
                    </Modal>
            </div>
        </section>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
