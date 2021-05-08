//USANDO JQUERY

$("#ocultar").click(function(){
    $("img").hide();
});

$("#mostrar").click(function(){
    $("img").show();
});

$("#subir").click(function(){
    window.scroll(0, 0)
})

$(document).ready( function() {
    $('div img').click(
        function() {
            $(this).animate({ 'zoom': 1.2 }, 400);
            alert("hey")
        },
        function() {
            $(this).animate({ 'zoom': 1 }, 400);
        });
    });