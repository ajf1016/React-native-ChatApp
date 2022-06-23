import AsyncStorage from '@react-native-async-storage/async-storage';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      const userData = {...state.userData, ...action.userData};
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      return {
        ...state,
        userData: userData,
      };
    default:
      return state;
  }
};

export default Reducer;
