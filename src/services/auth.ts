// User sign up and sign in helpers.
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Sign up a new user
export const signup = async (email:string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch(err) {
    console.error(err);
    throw err;
  }
};

// Sign in an existing user
export const login = async (email:string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};