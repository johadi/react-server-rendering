const initialState = {
  users: [],
  loggedInUser: {}
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'UPDATE_USER':
      return {
        ...state,
        loggedInUser: {...state.loggedInUser, ...action.payload}
      }
    default:
      return state;
  }
};

export default userReducer;
