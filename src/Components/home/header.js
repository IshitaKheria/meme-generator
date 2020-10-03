import React from 'react';

export default function Header(){

  const headerStyle = {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    background: '#6441A5',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #2a0845, #6441A5)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #2a0845, #6441A5)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

    return(
      <header style={headerStyle}>
        <img style={{height: "3rem", marginLeft: "3%", paddingRight:"1rem"}} 
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
          <h1 style={{color: 'whitesmoke',fontSize: '90%',marginLeft: '60px'}}>MEME GENERATOR</h1>               
      </header>
    )
}

