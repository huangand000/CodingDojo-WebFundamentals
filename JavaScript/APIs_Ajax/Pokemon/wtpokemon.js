$(document).ready(function(){
    var count = 1;
    for (var i = 0; i < 152; i++) {
        $(".pokemon").append("<img id='"+ count+"'src='http://pokeapi.co/media/img/"+count+".png'>");
        count++;

    }
    var id = 0;
    $(document).on("click", ".pokemon", function(e) {
        $(".pokedex").html("");
        id = e.target.id;
        var type = "<ul>"
        $.get("https://pokeapi.co/api/v2/pokemon/"+ id+"/", function(pokemon) {
            $(".pokedex").append("<h2> " + pokemon.name +" <h2>");
            $(".pokedex").append("<img src='http://pokeapi.co/media/img/"+ pokemon.id +".png'>")
            $(".pokedex").append("<h2> " + "Types" +" <h2>");
            for (var i = 0; i < pokemon.types.length; i++) {
                $(".pokedex").append("<li>" + pokemon.types[i].type.name + "</li>");
                $(".pokedex").append("<li>" + pokemon.types[i].type.name + "</li>");
            }   
            $(".pokedex").append("<h2> " + "Height" +" <h2>");
            $(".pokedex").append("<li>" + pokemon.height + "</li>");
            $(".pokedex").append("<h2> " + "Weight" +" <h2>");
            $(".pokedex").append("<li>" + pokemon.weight + "</li>");
            type+="</ul>";
        }, "json")
    });
});