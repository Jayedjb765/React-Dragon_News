import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, isloading] = useState(true);
  const createuser = (email, password) => {
    isloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Loogin = (email, password) => {
    isloading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const Loogout = () => {
    isloading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      isloading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const Authinfo = { user,loading, createuser, Loogin, Loogout };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
