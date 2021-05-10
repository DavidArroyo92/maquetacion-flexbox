//USANDO JQUERY

$(document).ready(function(){

    //MOSTRAR O OCULTAR TODAS LAS IMAGENES

    $("#ocultar").click(function(){
        $("img").hide();
    });

    $("#mostrar").click(function(){
        $("img").show();
    });

    //BOTON SUBIR 

    $("#subir").click(function(){
        window.scroll(0, 0)
    })

    //MOSTRAR Y OCULTAR MENU

    $(".menu-btn").click(function(){
        $(".side-bar").addClass("active");
    });

    $(".close-btn").click(function(){
        $(".side-bar").removeClass("active");
    });

    //CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});