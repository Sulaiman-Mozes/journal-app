import initialState from '../initialState';


const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
