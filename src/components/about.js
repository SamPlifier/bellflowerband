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

class SimpleGrow extends React.Component {
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
    musicianPhoto: null
  };
  bandMemberClick(e) {
      let classList = e.currentTarget.className;
      let name = e.currentTarget.dataset.idMusician;
      let photo = e.currentTarget.dataset.idImgurl;
      console.log(photo);
      let role = classList.slice(classList.lastIndexOf(' '));
      this.setState({
          musiciansModal: role,
          musicianName: name,
          musicianPhoto: photo,
          open: true
      })
  }
    handleClose = () => {
        this.setState({open: false});
    };
  render() {
    const instrumentList = (
     this.state.instrumentList.map((instrument,i) => {
         return <Grid item xs={6} sm={4} key={instrument} data-id-musician={this.state.instrumentData[instrument].musician} data-id-imgurl={this.state.instrumentData[instrument].photo} className={`card ${instrument.toLowerCase()}`} onClick={this.bandMemberClick.bind(instrument)} >
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
                    <div className="bandPhotoContainer"></div>
                    <Typography className="description">Paleo selvage leggings etsy. Unicorn viral williamsburg mlkshk woke DIY la croix poke try-hard raclette thundercats hammock kombucha blog selfies. Authentic celiac copper mug mumblecore. Cred typewriter keffiyeh coloring book franzen ugh street art single-origin coffee hell of pok pok. Squid everyday carry taiyaki, actually disrupt snackwave distillery jianbing adaptogen kombucha. Single-origin coffee pitchfork kickstarter actually, truffaut chia small batch sustainable vice slow-carb. Health goth shabby chic chia glossier helvetica small batch..</Typography>
                </Paper>
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
                                    <p>Pickled tousled listicle kitsch, chartreuse roof party blue bottle tattooed asymmetrical gastropub banh mi. Farm-to-table chillwave food truck, pabst pitchfork cloud bread taiyaki paleo vegan ugh tbh pug authentic man bun. YOLO godard sartorial vinyl. Everyday carry brooklyn you probably haven't heard of them food truck aesthetic raclette chicharrones put a bird on it cold-pressed fanny pack cray craft beer drinking vinegar single-origin coffee vice. </p>
                            </div>
                        </section>
                    </Modal>
            </div>
        </section>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);