// Variaveis globais
var navAtivada = 0;

$(document).ready(function(){
    // Alterar a navbar conforme o scroll
    changeNav();

});

function changeNav(){
    $(window).scroll(function(){

        //Pega a posição da NAVBAR
        var posY = $('nav').offset().top;
        
        //console.log(posY);
        
        // Se estiver de acordo com as condições, altera o formato da navbar, caso contrario volta ao normal.
        if(posY >= 75 && navAtivada == 0){
            $('nav').addClass('nav-active');
            navAtivada = 1;
        }else if(posY < 75 && navAtivada == 1){
            $('nav').removeClass('nav-active');
            navAtivada = 0;
        }
    });
}