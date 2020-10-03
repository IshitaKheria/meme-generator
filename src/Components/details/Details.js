import React, { useState, useEffect } from 'react';
import {AppBar, Button, Toolbar, TextField, FormControlLabel, Link, Box ,Typography, Container} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import UserPass from './meme.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details() {
    const params = useParams();
    const [meme, setMeme] = useState([]);
    const boxes = [];
    var bodyformData=new FormData();
    bodyformData.append('template_id',params.id);
    bodyformData.append('username','IshitaKheria');
    bodyformData.append('password','ishita#01');
    bodyformData.append('text0',' ');
    bodyformData.append('text1',' ');
    bodyformData.append('boxes',[]);

    const memeRequest = async()=>{
      
        axios({
            method: 'post',
            url: 'https://api.imgflip.com/caption_image',
            data: bodyformData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                //handle success
                console.log(response.data.data);
                setMeme(response.data.data)
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });          
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    memeRequest();
    }

    const user = (e) => {
        bodyformData.set("username", e.target.value);
    }

    const pass = (e) => {
        bodyformData.set("password", e.target.value);
    }

    const inputText = (e) =>{
        for(let i = 1; i <= params.box_count ; i++){
            bodyformData.set(`boxes[${i}][text]`, document.getElementById(`text${i}`) !== null ? document.getElementById(`text${i}`).value : " ");

        }
    }
  return (
      <main style={{width: "100%"}}>
          {/*Header*/}
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                meme generator 
            </Typography>
            </Toolbar>
        </AppBar>  
        <div>
            <img style={{display:"block", marginLeft: "auto", marginRight: "auto", width: "50%", padding:"2rem"}} src={meme.url} alt="meme" />
        </div>
        <UserPass count={params.box_count} click={handleSubmit} user={user} pass={pass} text={inputText}/>
        <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Box>
      </main>
  );
}