const firebaseConfig = {
apiKey: "AIzaSyCpjM7gyevWjO_y-N0pClpt_sNQNyZ13Ns",
authDomain: "ticketpy-4cafa.firebaseapp.com",
projectId: "ticketpy-4cafa",
storageBucket: "ticketpy-4cafa.firebasestorage.app",
messagingSenderId: "1027792611884",
appId: "1:1027792611884:web:528feeca6a817b0839ff89"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
