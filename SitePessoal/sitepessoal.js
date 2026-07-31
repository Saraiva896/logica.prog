const saudacao = document.getElementById("saudacao");

const hora = new Date().getHours(); 

if(hora < 12){

    saudacao.textContent = "Bom Dia!";

}else if(hora < 18){

    saudacao.textContent = "Boa Tarde!";

}else{
    saudacao.textContent = "Boa Noite!";
}