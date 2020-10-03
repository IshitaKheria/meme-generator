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

    const headerStyle = {
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        background: '#1440b8',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #0a297d, #2b59d6)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #0a297d, #2b59d6)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    
  return (
      <main style={{width: "100%"}}>
          {/*Header*/}
        <header style={headerStyle}>
            <img style={{height: "3rem", marginLeft: "3%", paddingRight:"1rem"}} 
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
            <h1 style={{color: 'whitesmoke',fontSize: '90%',marginLeft: '60px'}}>MEME GENERATOR</h1>               
        </header>
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