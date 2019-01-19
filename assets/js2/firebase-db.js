var database = firebase.database();



function writeUserData() {
    
    var us_nome = $("#nome").val();
    var us_idade = $("#idade").val();
    var us_peso = $("#peso").val();
    var us_altura = $("#altura").val();
    
  firebase.database().ref('pacientes/').push({
    nome: us_nome,
    idade: us_idade,
    peso: us_peso,
    altura: us_altura
  });
    
    
    lerDados();
}

var teste;

// Leitura 

function lerDados() {
    var userId = firebase.auth().currentUser.uid;
    
    return firebase.database().ref('/pacientes/').once('value').then(function(pacientes) {
      
        var htmlLista;
        
        console.log(pacientes.val());
        
        for (paciente in pacientes.val()) {
            console.log (pacientes.val()[paciente]);
            htmlLista += '<tr class="paciente"><td class="info-nome">' + pacientes.val()[paciente].nome + '</td><td class="info-idade">' + pacientes.val()[paciente].idade + '</td><td class="info-peso">' + pacientes.val()[paciente].peso + '</td><td class="info-altura">' + pacientes.val()[paciente].altura + '</td></tr>';
        }
        
        $("#tabela-pacientes").html(htmlLista);
    });
    
}

$("#buscar-pacientes").click(function() {
    
    lerDados();  
});