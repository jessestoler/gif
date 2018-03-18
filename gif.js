$(document).ready(function(){
var topics = [$("#arrival"), $("#close"), $("#ex"), $("#solaris"), $("#2001")];

$("#search").on("click", fi);

$(".film").on("click", sci);



function fi() {

if ($("#movie").val() == "") {
        alert("Please enter the name of your favorite sci-fi movie.");
    }

    else {
        var b = $("<button>");
        b.text($("#movie").val());
        $("#buttons").append(b);
        topics.push(b);
        b.attr("id", $("#movie").val());
        b.attr("data-movie", $("#movie").val());
        
       
           
            b.attr("class", "film");
            $(".film").on("click", sci);

            }
}

function sci() {
    $("#cinema").empty();
    $("#cta").css("visibility", "visible");
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    $(this).attr("data-movie") + "&api_key=wx9p7JJJbTuqM9W2mB3pMgK9Jo0cJiGN&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var shot = $("<div class='frames'>");
          
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var movieImage = $("<img class='still'>");
          var movieImageTwo = $("<img class='moving'>");
          var stanley = results[i].images.fixed_height_still.url;
          var kubrick = results[i].images.fixed_height.url;
         
          movieImage.attr("src", stanley);
          movieImageTwo.attr("src", kubrick);
          shot.prepend(p);
          shot.prepend(movieImage);
          
            shot.prepend(movieImageTwo);   
        
          $("#cinema").prepend(shot);

          $(".still").css("position", "relative");
          $(".moving").css("position", "relative");
          $(".moving").css("left", "300px");
          $(".moving").css("z-index", "2000");
          $(".still").css("z-index", "2001");
         
         
          
          $(".still").on("click", function() {

            var blade = $(this).css("z-index") - 2;

          
              
            $(this).css("z-index", blade);
              
          });
          $(".moving").on("click", function() {
              
            var runner = $(this).css("z-index") - 2;

            $(this).css("z-index", runner);
            

        });
         
          
         }
    });  
      }
});

