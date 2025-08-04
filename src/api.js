// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

async function getAllVans() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  return data.vans;
}

async function getOneVan(id) {
  const res = await fetch(`/api/vans/${id}`);
  const data = await res.json();
  return data.vans;
}

async function getHostedVans() {
  const res = await fetch("/api/host/vans");
  const data = await res.json();
  return data.vans;
}

async function getHostedVan(id) {
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

export { getAllVans, getOneVan, getHostedVans, getHostedVan, loginUser };
