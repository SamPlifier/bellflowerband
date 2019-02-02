import React from 'react';
import instruments from './instruments';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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
    modalType: null
  };
  bandMemberClick(e) {
      let classList = e.currentTarget.className;
      let role = classList.slice(classList.lastIndexOf(' '));
      this.setState({
          modalType: role
      })
  }
  createModal() {
      if (this.state.modalOpen === true) {
          console.log(`modal open = ${this.state.modalOpen}`);
      }
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
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
                    <div className="bandPhotoContainer"></div>
                    <Typography className="description">Paleo selvage leggings etsy. Unicorn viral williamsburg mlkshk woke DIY la croix poke try-hard raclette thundercats hammock kombucha blog selfies. Authentic celiac copper mug mumblecore. Cred typewriter keffiyeh coloring book franzen ugh street art single-origin coffee hell of pok pok. Squid everyday carry taiyaki, actually disrupt snackwave distillery jianbing adaptogen kombucha. Single-origin coffee pitchfork kickstarter actually, truffaut chia small batch sustainable vice slow-carb. Health goth shabby chic chia glossier helvetica small batch..</Typography>
                </Paper>
                <Grid container spacing={24} className="instrumentGrid">
                    {instrumentList}
                </Grid>
                <div className="modal"></div>
                    <Button onClick={this.handleOpen}>Open Modal</Button>
                    <Modal aria-labelledby="bellflower member details" aria-describedby="bellflower member details" open={this.state.open} onClose={this.handleClose}>
                        <div className="modal">
                            <Typography variant="h6" id="modal-title">Modal title will be based on band member clicked</Typography>
                            <Typography variant="subtitle1" id="simple-modal-description">Modal description will be based on member clicked.</Typography>
                            <img className="bandMemberImage" alt="bandMemberDetails" src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </div>
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
