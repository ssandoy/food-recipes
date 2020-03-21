import { auth } from "./firebase-setup";

// Sign Up
export const createUserWithEmailAndPassword = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password);
