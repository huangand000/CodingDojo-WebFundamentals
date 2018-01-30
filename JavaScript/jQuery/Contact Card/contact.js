$(document).ready(function() {
    var count = 0;
    $(document).on("click", ".btn", function() {
        $(".users").append("<div class='user'><h3 class='first'>" +$("#first_name").val()+ " " + $("#last_name").val()+"</h1><p class='moreInfo'>"+"Click for Description!"+"</p><p class='back'>"+ $(".description").val()+ "</p></div>");
        $(".back").hide();
        return false;
    });

    $(document).on("click", ".user", function(e) {
         $(this).children(".first").hide();
         $(this).children(".moreInfo").hide();
         $(this).children(".back").show();
    });
});