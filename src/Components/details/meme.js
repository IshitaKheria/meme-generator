import React from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid ,Box ,Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyleUser = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
  },
    note: {
      color: theme.palette.secondary.main,
    }

  }));



export default function UserPass(props) {
  
    const classes = useStyleUser();

    const text = [<TextField
      variant="outlined"
      margin="normal"
      fullWidth
      id='text1'
      label="text"
      name="text"
      required
      autoComplete="text"
      onInput={props.text}
      autoFocus        
    />];

  for (let i = 2; i <=props.count; i++) {
    text.push(<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id={`text${i}`}
        label="text"
        name="text"
        autoComplete="text"
        onInput={props.text}
        autoFocus        
      />);
  }

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Meme Edit
        </Typography>
        <Typography variant="caption" className={classes.note}>
          NOTE: the username and password is of 
          <a style={{color:"red", textDecoration:"none"}} href="https://imgflip.com/memegenerator"> Imgflip*</a>
          <br />For demo default valid username and password is present.
        </Typography>
        <form className={classes.form} onSubmit={props.click} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onInput={props.user}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onInput={props.pass}
          />
          <Grid container>
            <Grid item>
              <Link href="https://imgflip.com/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {text}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
                 Generate
          </Button>
          <Grid container>
          </Grid>
        </form>
      </div>   
    </Container>
  );
}