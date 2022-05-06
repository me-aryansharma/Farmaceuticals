const firebaseConfig = {
    apiKey: "AIzaSyC0TaH9fXu_pt_x1sM14FRHHDUuQHcBpUo",
    authDomain: "sih-project-f5083.firebaseapp.com",
    databaseURL: "https://sih-project-f5083-default-rtdb.firebaseio.com",
    projectId: "sih-project-f5083",
    storageBucket: "sih-project-f5083.appspot.com",
    messagingSenderId: "162420020881",
    appId: "1:162420020881:web:d3fa258e0b8afa26e29130"
  };

  firebase.initializeApp(firebaseConfig);

  var complaintDB = firebase.database().ref('Farmaceuticals');

  document.getElementById("complaint").addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();       

      var name = getElementVal('name');
      var phone = getElementVal('phone');
      var  comp= getElementVal('comp');


      saveData(name, phone, comp);

      alert('Form submitted successfully');
  }

const saveData = (name,phone,comp) => {
    var newComplaint = complaintDB.push();

    newComplaint.set({
        name : name,
        phone : phone,
        comp : comp    
    }); 
};

  const getElementVal = (id) => {
      return document.getElementById(id).value;
  };