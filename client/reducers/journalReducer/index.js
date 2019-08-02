import initialState from '../initialState';

const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default journalReducer;
