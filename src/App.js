import React from 'react';
import HomePage from './Pages/Home-Page/home-page.component';
import Shop from './Pages/Shop-Page/shop.component';
import CheckOut from './Pages/Checkout-Page/checkout.component';
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './Components/Header/header.component';
import Sign from './Pages/Sign-In-Sign-Up/sign-in-sign-up.component';
import {auth, addUserInfoInDb }  from  '../src/Components/firebase/firebase';
import { connect } from 'react-redux';
import { selectCurrentUser } from './Components/Redux/Users/user.selector';
import { setCurrentUser } from './Components/Redux/Users/user.actions';
import Collection from './Pages/Collection/Collection.components';
import { onMessageListener } from '../src/Components/firebase/firebase';

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
         // if(userAuth) {
         // const userRef = await addUserInfoInDb(userAuth);
         // userRef.onSnapshot(docSnapShot => {
         //    setCurrentUser({
         //          id: docSnapShot.id,
         //          ...docSnapShot.data()
         //    })
         // })
         // } else {
         //    setCurrentUser(userAuth);
         // }
         if (userAuth) { // When new authentication performed adding those details to firebase DB.
            if (userAuth.displayName)
                addUserInfoInDb(userAuth);
        }
        setCurrentUser(userAuth);
      });
      // onMessageListener().then((payload) => {
      //    console.log('Received Message', payload);
      // })
    }

    render() {
      return (
         <div>
            <Routes >
               <Route path='/' element={<Header SignOut={this.onSignOut} />}>
                  <Route index element={<HomePage />} />
                  <Route path='shop/*' element={<Shop />} />
                  <Route exact path='checkout' element={<CheckOut />}></Route>
                  <Route exact path='sign' element={<Sign currentUser={this.props.currentUser} />} />
               </Route>
            </Routes>
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
