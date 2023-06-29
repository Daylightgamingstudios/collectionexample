const firebaseConfig = {
    apiKey: "AIzaSyCEAkH6AKIIqNKDFCKhlKhWJYp1DhthLg4",
  authDomain: "example-581f6.firebaseapp.com",
  projectId: "example-581f6",
  storageBucket: "example-581f6.appspot.com",
  messagingSenderId: "276458032986",
  appId: "1:276458032986:web:07be67e579eee9792eed63",
  measurementId: "G-ERYNY2HKN5"
};

firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore();

const form=document.getElementById('sbmt-form');

form.addEventListener('submit', (e)  =>  {

e.preventDefault();

const email=form.email.value;
const name=form.name.value;
const phone=form.phone.value;
const model=form.computer.value;


firestore.collection('users').add({
    email,
    phone,
    name,
    model,
})
.then((docRef)=>{
console.log('Document written with ID: ',docRef.id);
window.location.href="confirmation.html";
})
.catch((error)=>{
    console.error('Error adding document: ',error);
})

form.reset();

});