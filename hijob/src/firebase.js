// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgKqj7J0ssgfIbPHdXiPP6JeGlsonOQXU",
  authDomain: "hijob-3dcfd.firebaseapp.com",
  projectId: "hijob-3dcfd",
  storageBucket: "hijob-3dcfd.appspot.com",
  messagingSenderId: "1012973828450",
  appId: "1:1012973828450:web:3e2367ff27acfe828f943b",
  measurementId: "G-TT22044HQB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

//firebase에 모든 것을 export하는 대신 원하는 서비스만 Export 할 수 있음
export const auth = firebase.auth();

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
