export default {
  users: {
    loading: false,
    isloggedIn: false,
    user_data: { email: '', token: '', username: '' },
    successMessage: '',
    errorMessage: '',
  },
  journals: {
    list: {
      notes: [],
      loading: false,
      error: '',
    },
    add: {
      loading: false,
      error: '',
    },
  },
};
