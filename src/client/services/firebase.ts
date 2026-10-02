import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxGFQpwqPfbMKEGRWsJk6B8gvY2A5PzoM",
  authDomain: "resume-172205.firebaseapp.com",
  databaseURL: "https://resume-172205.firebaseio.com",
  projectId: "resume-172205",
  storageBucket: "resume-172205.appspot.com",
  messagingSenderId: "528274606655",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export async function firebaseSignOut() {
  await signOut(auth);
}
