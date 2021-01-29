import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from "./Pages/ShopPage/shoppage.component";
import Header from "./Components/Header/header-component";
import SignInAndSignUpPage from "./Pages/Sign-in-Sign-up/Sign-in-Sign-up";
class App extends React.Component
{
 render() { return (
    <div >
       <Header />
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
       </Switch>
    </div>
 )
 }
}

export default App;
