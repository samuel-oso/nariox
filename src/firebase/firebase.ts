import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  NextOrObserver,
  User,
  updateProfile,
  sendPasswordResetEmail, // Add the sendPasswordResetEmail function from firebase/auth
} from "firebase/auth";
import { getFirebaseConfig } from "./firebase-config";

const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);

export const signInUser = async (email: string, password: string) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Add the createUser function with fullName parameter
export const createUser = async (
  email: string,
  password: string,
  fullName: string
) => {
  if (!email && !password) return;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Set the full name of the user in the user's display name
  if (userCredential.user) {
    await updateProfile(auth.currentUser!, { displayName: fullName });
  }

  return userCredential;
};

// Add the sendPasswordResetEmail function to reset the user's password
export const sendResetPasswordEmail = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // Password reset email sent successfully
    return true;
  } catch (error) {
    // Error sending password reset email
    console.error("Error sending password reset email:", error);
    return false;
  }
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
