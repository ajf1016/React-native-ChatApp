import React, {createContext, useReducer} from 'react';
import Reducer from './reducer';

const initialState = {
  userData: {
    isVerified: false,
    name: '',
    profile_pic: '',
    chatData: [],
  },
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const checkRole = role => {
    return state.roles.includes(role);
  };

  return (
    <Context.Provider value={{state, dispatch, checkRole}}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
