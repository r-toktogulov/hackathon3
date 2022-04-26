import React, { useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const clientContext = React.createContext();

const initState = {
  products: [],
  user: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <clientContext.Provider
      value={{
        authWithGoogle: authWithGoogle,
        logout: logout,
        user: state.user,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
