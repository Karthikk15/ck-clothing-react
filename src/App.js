import React from 'react';
import HomePage from './Pages/Home-Page/home-page.component';
import Shop from './Pages/Shop-Page/shop.component';
import CheckOut from './Pages/Checkout-Page/checkout.component';
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/header.component';
import Sign from './Pages/Sign-In-Sign-Up/sign-in-sign-up.component';
import {auth, addUserInfoInDb }  from  '../src/Components/firebase/firebase';
import { connect } from 'react-redux';
import { selectCurrentUser } from './Components/Redux/Users/user.selector';
import { setCurrentUser } from './Components/Redux/Users/user.actions';

 class App extends React.Component {

    constructor() {
       super();
    } 

   unsubscribeAuth = null;   

   componentWillUnmount() {
      console.log('UnMounted!');
      this.unsubscribeAuth && this.unsubscribeAuth();
   }

    componentDidMount() {
      const {setCurrentUser} = this.props;
      this.unsubscribeAuth = auth.onAuthStateChanged( async (userAuth) => {
         if(userAuth) {
         const userRef = await addUserInfoInDb(userAuth);
         userRef.onSnapshot(docSnapShot => {
            setCurrentUser({
                  id: docSnapShot.id,
                  ...docSnapShot.data()
            })
         })
         } else {
            setCurrentUser(userAuth);
         }
      });
    }

    onSignOut() {
      auth.signOut();
    }

    render() {
      return (
         <div>
            <Header SignOut = {this.onSignOut}/>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route path='/shop' component={Shop} />
               <Route exact path='/checkout' component={CheckOut}></Route>
               <Route exact path='/sign' render = { () => this.props.currentUser ? <Redirect to='/'></Redirect> : <Sign /> } />
            </Switch>
           
         </div>
      )
    }
}

const mapStateToProps = (state) => {
   return {
     currentUser : selectCurrentUser(state)
   };
  }

const mapDispatchToProps = (dispatch) => {
   return {
       setCurrentUser : (user) => {
         dispatch(setCurrentUser(user));
       }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
