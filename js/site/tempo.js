var today = new Date();
var hora = today.getUTCHours();
var time = today.getTime();
var tempo;

if (hora > 18){
    tempo = "Boa noite!";
}else if(hora > 12){
    tempo = "Boa tarde!";
}else if(hora >0){
    tempo = "Bom dia!";
}else{
    tempo = "Bem vindo!";
}

document.write('<h3>'+ tempo +'</h3>')
document.write('<h3>'+ time +'</h3>')