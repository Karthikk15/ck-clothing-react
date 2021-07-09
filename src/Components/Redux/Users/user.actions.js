import userActions from "./user.types"

export const setCurrentUser = (user) => {
    return {
        type: userActions.SET_CURRENT_USER,
        payload: user
    }
}