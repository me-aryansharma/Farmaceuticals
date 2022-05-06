const firebaseConfig = {
    apiKey: "AIzaSyC0TaH9fXu_pt_x1sM14FRHHDUuQHcBpUo",
    authDomain: "sih-project-f5083.firebaseapp.com",
    databaseURL: "https://sih-project-f5083-default-rtdb.firebaseio.com",
    projectId: "sih-project-f5083",
    storageBucket: "sih-project-f5083.appspot.com",
    messagingSenderId: "162420020881",
    appId: "1:162420020881:web:a8792408a55e6095e29130"
  };

  firebase.initializeApp(firebaseConfig);

  var statusDB = firebase.database().ref('Farmaceuticals');

  document.getElementById("status").addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();       

      var phone = getElementVal('phone');
      var  adhaar= getElementVal('adhaar');


      saveData(phone, adhaar);

      alert('Verification Pending');
  }

const saveData = (phone,adhaar) => {
    var newStatus = statusDB.push();

    newStatus.set({
        phone : phone,
        adhaar : adhaar    
    }); 
};

  const getElementVal = (id) => {
      return document.getElementById(id).value;
  };