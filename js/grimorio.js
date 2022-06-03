$(document).ready(function() {
    var grimorio1 = [
        "image/carta3.png",
        "image/planicie.png",
        "image/carta4.png",
        "image/planicie.png",
        "image/carta5.png",
        "image/planicie.png",
        "image/carta4.png",
        "image/planicie.png",
        "image/carta6.png",
        "image/planicie.png",
        "image/carta7.png",
        "image/planicie.png"

    ];
      
      var numero1;
      var celular1;
      
      var zap1 = document.forms["dados1"];
      
      celular1 = zap1.elements["zap1"].value;


    $(".grimorioDoJogador1").click(function(event) {
        var numero1 = Math.floor(Math.random() * 12);
        numero1 = numero1 +1;
        //numero = window.encodeURIComponent(numero);
        //alert(grimorio[numero]);
        //var codigoDaCarta = numero1;
        window.open("https://api.whatsapp.com/send?phone=" + celular1 + "&text="
            +grimorio1[numero1],
            "_blank");



        //alert("codigo da carta: "+codigoDaCarta+"   "+grimorio[numero]);
    });
});

$(document).ready(function() {
    var linkCarta1;
    var cartaEscolhida1;
    var aux1 = 0;

    $(".cartasNaMao2").click(function(event) {
        //alert("teste");
        linkCarta1 = prompt("cole aqui o link da carta! esta disponivel no seu whats app");


        cartaEscolhida1 = document.querySelectorAll('img')[2+aux];
        cartaEscolhida1.setAttribute('src', linkCarta1);
        aux1++;
    });
});

//grimorioDoJogador2"

$(document).ready(function() {
    var grimorio2 = [
        "image/carta3.png",
        "image/planicie.png",
        "image/carta4.png",
        "image/planicie.png",
        "image/carta5.png",
        "image/planicie.png",
        "image/carta4.png",
        "image/planicie.png",
        "image/carta6.png",
        "image/planicie.png",
        "image/carta7.png",
        "image/planicie.png"

    ];
      var numero2;
      var celular2;
      
      var zap2 = document.forms["dados2"];
      
      celular2 = zap2.elements["zap2"].value;


    $(".grimorioDoJogador2").click(function(event) {
        var numero2 = Math.floor(Math.random() * 12);
        numero2 = numero2 +1;
        //numero = window.encodeURIComponent(numero);
        //alert(grimorio[numero]);
        //var codigoDaCarta = numero;
        window.open("https://api.whatsapp.com/send?phone=" + celular2 + "&text="
            +grimorio2[numero2],
            "_blank");



        //alert("codigo da carta: "+codigoDaCarta+"   "+grimorio[numero]);
    });
});

$(document).ready(function() {
    var linkCarta2;
    var cartaEscolhida2;
    var aux2 = 0;

    $(".cartasNaMao2").click(function(event) {
        //alert("teste");
        linkCarta2 = prompt("cole aqui o link da carta! esta disponivel no seu whats app");


        cartaEscolhida2 = document.querySelectorAll('img')[12+aux];
        cartaEscolhida2.setAttribute('src', linkCarta2);
        aux2++;
    });
});

//grimorioDoJogador1">*/
