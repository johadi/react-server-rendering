export const updateUserAction = (userDetails) => {
  return {
    type: 'UPDATE_USER',
    payload: userDetails
  }
};
export const getUsersAction = (users) => {
  return {
    type: 'GET_USERS',
    payload: users
  }
};
