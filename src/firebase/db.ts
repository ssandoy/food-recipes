import { db } from "./firebase-setup";

// User API
export const createUser = (id: string, username: string, email: string) =>
  db.ref(`users/${id}`).push({
    email,
    username,
  });
