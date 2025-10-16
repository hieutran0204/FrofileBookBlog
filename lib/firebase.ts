// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAmHkgCzMZ9__ZmijtehkzbLZwCfBXskJA",
//   authDomain: "profileblogbook.firebaseapp.com",
//   projectId: "profileblogbook",
//   storageBucket: "profileblogbook.firebasestorage.app",
//   messagingSenderId: "742111318945",
//   appId: "1:742111318945:web:7a7bbd7b6421fe0be771e0",
//   measurementId: "G-NMP3YS2F5P",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase (lấy từ Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAmHkgCzMZ9__ZmijtehkzbLZwCfBXskJA",
  authDomain: "profileblogbook.firebaseapp.com",
  projectId: "profileblogbook",
  storageBucket: "profileblogbook.firebasestorage.app",
  messagingSenderId: "742111318945",
  appId: "1:742111318945:web:7a7bbd7b6421fe0be771e0",
  measurementId: "G-NMP3YS2F5P",
};

// Tránh lỗi khi Firebase khởi tạo nhiều lần (Next.js hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore và Storage để dùng ở các trang khác
export const db = getFirestore(app);
export const storage = getStorage(app);
