import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, onSnapshot, collection } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsfmSSfnWzwq-aLjdnXO8IDmYA6fUShoU",
    authDomain: "npm-test-6e462.firebaseapp.com",
    projectId: "npm-test-6e462",
    storageBucket: "npm-test-6e462.appspot.com",
    messagingSenderId: "457267373010",
    appId: "1:457267373010:web:bc80805b6e218a3439de0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//card fill
let row = document.getElementById('drow');

function AddItemToCard(comment, link) {
    let div = document.createElement("div");
    let img = document.createElement('img');
    let div1 = document.createElement('div');
    let h6 = document.createElement('h5');

    h6.innerHTML = comment;
    div1.className = 'layer';
    div1.appendChild(h6);
    img.src = link;
    img.style.width = "100%";
    div.className = 'feature-col';
    div.appendChild(img);
    div.appendChild(div1);

    row.appendChild(div);
}

function AddAllItemsToCard(POST) {
    POST.forEach(element => {
        AddItemToCard(element.comment, element.imgLink)
    });
}
async function GetDataRealTimeCard() {
    const dbRef = collection(db, "posts");

    onSnapshot(dbRef, (querySnapshot) => {
        var posts = [];

        querySnapshot.forEach(doc => {
            posts.push(doc.data());
        });
        AddAllItemsToCard(posts);
    })
}
window.onload = GetDataRealTimeCard;