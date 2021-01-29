import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from "./Pages/ShopPage/shoppage.component";

class App extends React.Component
{
 render() { return (
    <div >
     <Route exact path='/' component= {HomePage} />
     <Route exact path='/shop' component= {ShopPage} />
    </div>
 )
 }
}

export default App;
