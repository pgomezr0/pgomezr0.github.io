/*===== Contact Form =====*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFWPbld3L6dibmedQb3vks1co41Co6LsI",
    authDomain: "portfolio-contact-form-c3679.firebaseapp.com",
    projectId: "portfolio-contact-form-c3679",
    storageBucket: "portfolio-contact-form-c3679.appspot.com",
    messagingSenderId: "556417085737",
    appId: "1:556417085737:web:3aa558bfeae35a63d88738"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference contactInfo collections
let contactInfo = firebase.database().ref("contact-data");

//Listen for a submit
document.querySelector(".contact__form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get input values
    let name = document.querySelector("[name='name']").value;
    let email = document.querySelector("[name='email']").value;
    let message = document.querySelector("[name='message']").value;
   
    saveContactInfo(name, email, message);

    document.querySelector(".contact__form").reset();
    
    sendEmail(name, email, message);

}

//Saves contanct info in Firebase DB
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    //Push object to Firebase DB
    newContactInfo.set({
        Name: name,
        Email: email,
        Message: message,
    });
}

//Sends contact info to Gmail
function sendEmail(name, email, message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pgr0109@gmail.com",
        Password : "jarhdpszeldydxzy",
        To : "pgr0109@gmail.com",
        From : "pgr0109@gmail.com",
        Subject : `[👩🏻‍💻 CodeWithPolly] ${name} sent you a message`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
      message => alert("Email sent successfully.")
    );
}
