$(document).ready(function(){
var topics = [$("#arrival"), $("#close"), $("#ex"), $("#solaris"), $("#2001")];

$("#search").on("click", fi);

$(".film").on("click", sci);



function fi() {

if ($("#movie").val() == "") {
        alert("no");
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
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    $(this).attr("data-movie") + "&api_key=wx9p7JJJbTuqM9W2mB3pMgK9Jo0cJiGN&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            console.log(results);

          var gifDiv = $("<div class='frames'>");
          
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var movieImage = $("<img class='still'>");
          var stanley = results[i].images.fixed_height_still.url;
          var kubrick = results[i].images.fixed_height.url;
         
          movieImage.attr("src", stanley);
          gifDiv.prepend(p);
          gifDiv.prepend(movieImage);
        
          $("#cinema").prepend(gifDiv);
         
          
          $(".still").on("click", function() {
              var blade = $(this).attr("src");
              $(this).attr("src", kubrick);
              console.log(blade);
          });

         
          
         }
    });  
      }
});

