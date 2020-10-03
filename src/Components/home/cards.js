import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const useStyleCard = makeStyles((theme) => ({

    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      minMarginLeft: '1rem',
      minMarginRight: '2rem',
      display: 'flex',
      alignItems: 'center',
      width:'80%'
    },
    cardDisplay: {
      minMarginLeft: '1rem',
      minMarginRight: '2rem',
      display: 'flex',
      alignItems: 'center',
      width:'80%'
    },
    card: {
      height: 500,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      width: 380,
      maxWidth: '75vw',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      height: 400,      
    },
    cardContent: {
      flexGrow: 1,
      padding: 25,
    }
  }));
  
  const Loading = () => (
    <div style={{height:"50%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <CircularProgress color="secondary" />
    </div>
)

export default function Cards(props)

    {const classes = useStyleCard();
    console.log(props.info)
    return(
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={1}>
        {props.info.slice((props.page - 1)*props.offset,(props.page - 1)*props.offset + props.perPage).map(meme => (
            <Grid item key={meme.id} xs={12} sm={6} md={6} lg={6} className={classes.cardDisplay} >
              <Card className={classes.card}>
                <LazyLoad key={meme.id} placeholder={<Loading />}>
                <CardMedia
                  className={classes.cardMedia}
                  image={meme.url}
                  title={meme.name}
                  height="400"
                />
                {<CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {meme.name}
                  <br />
                  Box Count:- {meme.box_count}
                  </Typography>
                </CardContent>}
                </LazyLoad>
                <CardActions>
                <Link  to={
                            {pathname: "/" + meme.id + "/" + meme.box_count + "/" + meme.url,
                                state: {
                                          meme: meme
                                        }
                            }}>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}        
        </Grid>
      </Container>
 )}
  