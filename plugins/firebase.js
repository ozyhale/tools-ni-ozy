// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyAyospSiuv6c4JUhUk5X_2ruz8tqFnCUKE",
//   authDomain: "tools-ni-ozy.firebaseapp.com",
//   projectId: "tools-ni-ozy",
//   storageBucket: "tools-ni-ozy.appspot.com",
//   messagingSenderId: "102100480046",
//   appId: "1:102100480046:web:66b79679548192b47eefbf",
//   measurementId: "G-912JSMBWGF"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   //firebase.analytics();
// }

// export default ({ app }, inject) => {
//   inject('firebaseAuth', firebase.auth());
// }