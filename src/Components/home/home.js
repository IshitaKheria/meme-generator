import React, { useState, useEffect } from 'react';
import {CssBaseline, Typography, Link, Grid} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Footer from './footer.js';
import Header from './header.js';
import Cards from './cards.js';
import Intro from './intro.js';
import axios from 'axios';


function Home() {

const [data,setData] = useState([]);
const [currentPage, setPage] = useState(1);
const [offset, setOffset] = useState(10);
const [perPage, setPerPage] = useState(10);


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#website_link">
          Ishita Kheria
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://api.imgflip.com/get_memes')
      response = await response.json()
      setData(response.data.memes)  
      //to check that api call was successful 
      //console.log(response.data.memes)
    }

    fetchMyAPI()
  }, [])

  //to check the type of the data
  //console.log({data}.data)

  const styles = {
    paperContainer: {
        backgroundImage: `url(${"background.JPG"})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
};

  const count = Math.ceil({data}.data.length / {perPage}.perPage)
  
  return (
    <React.Fragment>
    <CssBaseline />
    
    <main style={{width: "100%"}}>    
      <Header />
        <Intro />
        <div style={styles.paperContainer}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>
            <Pagination 
                count={count} 
                page={currentPage} 
                variant="outlined" 
                shape="rounded" 
                onChange={(event,val)=> setPage(val)}
                />
        </div>
        <div><Cards info={{data}.data} page={currentPage} perPage={perPage} offset={offset}/></div> 
        <div style={{display:"flex", alignItems:"center",justifyContent:"center", width:"100%"}}>
            <Pagination 
                count={count} 
                page={currentPage} 
                variant="outlined" 
                shape="rounded" 
                onChange={(event,val)=> setPage(val)}
                />
        </div>
        </div>
    </main>
      <Footer />
      <Copyright />
    </React.Fragment>
  );
}


export default Home;