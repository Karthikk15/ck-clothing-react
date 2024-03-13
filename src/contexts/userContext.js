import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, addUserInfoInDb } from "../Components/firebase/firebase";

export const userContext = createContext({
currentUser: null,
setCurrentUser: () => null
});

// User context used to pass the required current user to the needed components instead of passing
//unnecessarily to the components which doesn't need this current user information ().
export const UserProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(null);
const value={ currentUser, setCurrentUser};
useEffect(()=>{
  const unsubscribe =  onAuthStateChangedListener((user) => {
       console.log('Listener Called!')
        if (user) { // When new authentication performed adding those details to firebase DB.
            if (user.displayName)
                addUserInfoInDb(user);
        }
        setCurrentUser(user);
    })

    return unsubscribe;
})

return(
    <userContext.Provider value={value}>{children}</userContext.Provider>
)
}