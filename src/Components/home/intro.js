import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyleIntro = makeStyles((theme) => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      //padding: theme.spacing(8, 0, 6),
      margin:'0rem',
      padding: '1rem',
    },

  }));
  

export default function Intro(){

    const classes = useStyleIntro();
    return(
        <Grid item xs={12} sm={12} className={classes.heroContent}>
        <Container maxWidth="sm">
          <img style={{height: "8rem", marginLeft: "30%", maxWidth:"50%" }} 
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Meme Generator
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Make memes easily with this meme maker. Select a pic and start editing. Enjoy Meme making! <br />
            <span style={{color:"crimson"}}>Note:- account required on 
            <a style={{color:"red", textDecoration:"none"}} href="https://imgflip.com/memegenerator"> ImgFlip*</a></span>
          </Typography>
        </Container>
        </Grid>
      
    )
}