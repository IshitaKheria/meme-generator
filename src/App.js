import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Details from "./Components/details/Details"; 
import Home from "./Components/home/home";
import './App.css';

class App extends Component {


  render(){
    return (
      <BrowserRouter>
        <main>
            <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/:id/:box_count/:url' component={Details} /> 
            </Switch>
        </main>
      </BrowserRouter>
      
        
    );
  }
  
}

export default App;
