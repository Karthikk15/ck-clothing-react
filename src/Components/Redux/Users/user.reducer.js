import userActions from "./user.types";

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActions.SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser : action.payload });
        default:
            return state;
    }
}

export default userReducer;