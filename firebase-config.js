// ==================== FIREBASE CONFIGURATION ====================
// MAREE: YAHAN APNI FIREBASE PROJECT KI DETAILS DALO

const firebaseConfig = {
  apiKey: "AIzaSyCbpgjPk2ce7igWjfQZsMzDa7fD2iaZMgI",
  authDomain: "shopeverse-fff80.firebaseapp.com",
  projectId: "shopeverse-fff80",
  storageBucket: "shopeverse-fff80.firebasestorage.app",
  messagingSenderId: "738679244636",
  appId: "1:738679244636:web:8171f1170cc7f3ec876399",
  measurementId: "G-45X5GXEDLC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Firestore Collections
const collections = {
    products: db.collection('products'),
    categories: db.collection('categories'),
    users: db.collection('users'),
    cart: db.collection('cart'),
    wishlist: db.collection('wishlist'),
    orders: db.collection('orders'),
    reviews: db.collection('reviews'),
    coupons: db.collection('coupons')
};

// Make globally available
window.auth = auth;
window.db = db;
window.storage = storage;
window.collections = collections;

console.log('🔥 Firebase initialized successfully!');