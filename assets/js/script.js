//
// @author      : Daniel Costa Munhoz 
// @deacription : Script que comporta todas as animações, entre outros pontos visuais do portifolio
// 

var dasdsa = 0;

// Variaveis globais
var navAtivada = 0;
var toggler = 0;

// Funções chamadas fora evento SCROLL pois é necessário ser executada tambem quando a pagina der reload
changeNav();
backgroundScroll();

// Funções ativadas no scroll da pagina
$(window).scroll(function(){
    changeNav();
    backgroundScroll();
});


// Alterar navbar de acordo com o scroll da pagina
function changeNav(){
    //Pega a posição da NAVBAR
    var posY = $('nav').offset().top;

    // Se estiver de acordo com as condições, altera o formato da navbar, caso contrario volta ao normal.
    if(posY >= 75 && navAtivada == 0){
        $('nav').addClass('nav-active');
        navAtivada = 1;
    }else if(posY < 75 && navAtivada == 1){
        $('nav').removeClass('nav-active');
        navAtivada = 0;
    }
}

// Efeito parallax no background quando o scroll na pagina é efetuado
function backgroundScroll(){
        // Captura a posição da pagina
        var backgroundPosition = $(window).scrollTop();
        var blur = backgroundPosition / 300;
    
        //Seta a propriedade background position y do background negativa(para subir), multiplicando o valor do scroll. Qaunto maior o valor da multiplicação, mais rapido sera o scroll
        $('#background').css({'background-position-y': -(backgroundPosition * .5)});
    
        //Aplica um blur na imagem conforme o scroll
        //$('#background').css({"filter": "blur("+blur+"px)" });
}

// Efeito scroll automatico ao clicar em um link enviado para um elemento da pagina.
function scrollOnClick(){

}


$(document).ready(function(){
    // Menu responsivo
    $('#toggler').click(function(){
        $('#menu-itens').toggleClass('toggler-active');
    });

    // Animação de scroll
    $('.scrollTo').click(function(e){
        // Remove a função padrão de ir até o elemento da tag 'a'
        e.preventDefault();

        // Remove a classe que faz os itens do navbar serem exibidos
        $('#menu-itens').removeClass('toggler-active');

        // Pega o valor do atributo 'href' do elemento que foi clicado
        var target = $(this).attr('href');
        
        // Como base no valor do href, captura a posição do TOP em que o elemento esta
        var moveTo = $(target).offset().top;

        // Anima a pagina até a posição do elemento clicado
        $('html, body').animate({
            // Tira 80px do scrill pois a navbar passa a ter 80px,
            // isso é necessário para a nav não cobrir o conteudo.
            scrollTop: moveTo - 80
        }, 1300, function(){
            
        });
    });

});