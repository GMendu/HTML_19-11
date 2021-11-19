var today = new Date();
var hora = today.getUTCHours();
var tempo;
var ins = document.getElementById('bv')


if (hora > 18){
    tempo = "<h3>Boa noite!</h3>";
}else if(hora > 12){
    tempo = "<h3>Boa tarde!</h3>";
}else if(hora >0){
    tempo = "<h3>Bom dia!</h3>";
}else{
    tempo = "<h3>Bem vindo!</h3>";
}

ins.innerHTML= tempo;
