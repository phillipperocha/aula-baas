var sess_usr;



var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().languageCode = 'pt';

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
       
        str_usr = JSON.stringify(user);
        sessionStorage.setItem('user', str_usr);
        
        sess_usr = JSON.parse(sessionStorage.getItem('user'));
        
        $("#logout").text("Logout");
        $("#bemvindo").text("Olá " + sess_usr.displayName)
        
        
        console.log(sess_usr);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    


// logout

$("#logout").click(function() {
    
    if ($("#logout").text() == "Logout") {
            firebase.auth().signOut().then(function() {
      // Sign-out successful.
        sessionStorage.clear();
        alert("Logout realizado com sucesso!");
        $("#logout").text("Login");
                $("#bemvindo").html('<button id="login" class="btn btn-principal" onclick="chamaLogin()">Login com Google <i class="fa fa-google red"></i></button>')
        
        console.log("Logout cmo successo");
    }).catch(function(error) {
      // An error happened.
        console.log("Logout error");
    });
    }

})