import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/homepage.component';

const HatsPage = (props) => {
   console.log(props);
  return (
      
      <h1>HatsPage</h1>
   )
}

class App extends React.Component
{
 render() { return (
    <div >
     <Route exact path='/' component= {HomePage} />
     <Route exact path='/hatsPage' component= {HatsPage} />
    </div>
 )
 }
}

export default App;
