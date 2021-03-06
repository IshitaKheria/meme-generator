import React, { useState, useEffect } from 'react';
import {AppBar, Button, Toolbar, TextField, FormControlLabel, Link, Box ,Typography, Container} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import UserPass from './meme.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details(props) {
    const params = useParams();
    const [meme, setMeme] = useState([]);
    const [image, setImage] = useState(props.location.state.meme.url);
    const [message, setMessage] = useState('')
    const [open,setOpen] = useState(true)
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
                if(response.data.success === true){
                    console.log(response.data.data);
                    setMeme(response.data.data);   
                    setImage(response.data.data.url);
                    setMessage('Meme Generated Successfully!!')     
                }
                else{
                    setMessage(response.data.error_message) 
                }
                          
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
    
    const title = props.location.state.meme.name

    
  return (
      <main style={{width: "100%"}}>
          {/*Header*/}
        <header style={headerStyle}>
            <img style={{height: "3rem", marginLeft: "3%", paddingRight:"1rem"}} 
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
            <h1 style={{color: 'whitesmoke',fontSize: '90%',marginLeft: '60px'}}>MEME GENERATOR</h1>               
        </header>
        <div style={{display:'flex', alignItems:'center', flexDirection:'column',padding:'1rem'}}>
        <Typography component="h3" variant="h5">
          {title}
        </Typography>
        <a href={image} download>
         <img style={{display:"block", marginLeft: "auto", marginRight: "auto", width: "80%",maxWidth:'400px', padding:"2rem"}} src={image} alt="meme" />
        </a>   
        <Typography variant="caption">
          Click on the image to download it!
        </Typography>
        </div>
        <UserPass count={params.box_count} click={handleSubmit} user={user} pass={pass} text={inputText}/>
        <Typography variant="body2" color= 'secondary' align="center" >
          {message}
        </Typography>
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