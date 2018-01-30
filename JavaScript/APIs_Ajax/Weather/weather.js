$(document).ready(function() {
    $('form').submit(function() {

        console.log($(".textbox").val())
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+$(".textbox").val()+",us&&appid=eab95e596dc0575a82d66f97b6e04095", function(info) {
            $(".weatherInfo").append("<h1>"+ info.name +"</h1>")
            $(".weatherInfo").append("<p>"+ "Temperature: " + Math.floor(info.main.temp * (9/5) - 459.67)+"</p>");           
        }, 'json');
            return false;
    });
});
