import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// console.log(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   console.log(children);
  //   const user = { name: "nodi" };
  const createUser = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
