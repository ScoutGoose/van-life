import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore/lite";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket: "vanlife-c2fd1.firebasestorage.app",
  messagingSenderId: "700944486484",
  appId: "1:700944486484:web:0e7baf067892e71abfddc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const allVanCollectionRef = collection(db, "vans");

async function getAllVans() {
  const snapshot = await getDocs(allVanCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

async function getOneVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

async function getHostVans() {
  const q = query(allVanCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

async function getHostVan(id) {
  const res = await fetch(`/api/host/vans/${id}`);
  const data = await res.json();
  return data.vans;
}

async function loginUser(credsObj) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(credsObj),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: data.statusText,
      status: data.status,
    };
  }
  return data;
}

export { getAllVans, getOneVan, getHostVans, getHostVan, loginUser };
