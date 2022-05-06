const firebaseConfig = {
    apiKey: "AIzaSyC0TaH9fXu_pt_x1sM14FRHHDUuQHcBpUo",
    authDomain: "sih-project-f5083.firebaseapp.com",
    databaseURL: "https://sih-project-f5083-default-rtdb.firebaseio.com",
    projectId: "sih-project-f5083",
    storageBucket: "sih-project-f5083.appspot.com",
    messagingSenderId: "162420020881",
    appId: "1:162420020881:web:d9b241276622d757e29130"
  };

  firebase.initializeApp(firebaseConfig);

  var registerDB = firebase.database().ref('Farmaceuticals');

  document.getElementById("register").addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();       

      var state = getElementVal('state');
      var district = getElementVal('district');
      var village = getElementVal('village');
      var name = getElementVal('name');
      var khasra = getElementVal('khasra');
      var adhaar = getElementVal('adhaar');
      var contact = getElementVal('contact');
      var address = getElementVal('address');


      saveData(state, district, village,name,khasra, adhaar, contact, address);

      alert('Form submitted successfully');
  }

const saveData = (state, district, village,name,khasra, adhaar, contact, address) => {
    var newRegister = registerDB.push();

    newRegister.set({
        state : state,
        district : district,
        village : village,
        name : name,
        khasra : khasra,
        adhaar : adhaar,
        contact : contact,
        address : address
    
    }); 
};

  const getElementVal = (id) => {
      return document.getElementById(id).value;
  };