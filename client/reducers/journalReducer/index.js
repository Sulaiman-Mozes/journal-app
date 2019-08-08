import initialState from '../initialState';

const journalReducer = (state = initialState.journals, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default journalReducer;
