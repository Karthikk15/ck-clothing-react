import React from 'react';
import HomePage from './Pages/Home-Page/home-page.component';
import Shop from './Pages/Shop-Page/shop.component';
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/header.component';
import Sign from './Pages/Sign-In-Sign-Up/sign-in-sign-up.component';
import {auth, addUserInfoInDb }  from  '../src/Components/firebase/firebase';

 class App extends React.Component {

    constructor() {
       super();
       this.state = {
          currentUser : null
       }
    } 

   unsubscribeAuth = null;   

   componentWillUnmount() {
      console.log('UnMounted!');
      this.unsubscribeAuth && this.unsubscribeAuth();
   }

    componentDidMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged( async (userAuth) => {
         if(userAuth) {
         const userRef = await addUserInfoInDb(userAuth);
         userRef.onSnapshot(docSnapShot => {
            this.setState({
               currentUser: {
                  id: docSnapShot.id,
                  ...docSnapShot.data()
               }
            })
         })
         } else {
            this.setState({currentUser : userAuth});
         }
      });
    }

    onSignOut() {
      auth.signOut();
    }

    render() {
      return (
         <div>
            <Header currentUser ={this.state.currentUser} SignOut = {this.onSignOut}/>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/shop' component={Shop} />
               <Route exact path='/sign' component={Sign} />
            </Switch>
           
         </div>
      )
    }
}

export default App;
