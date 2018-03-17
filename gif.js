$(document).ready(function(){
var topics = [$("#arrival"), $("#close"), $("#ex"), $("#solaris"), $("#2001")];
var b = $("<button>");
//var c = topics[topics.length - 1];

$("#search").on("click", kendrick);
$(".film").on("click", joni);
$(".frames").on("click", paula);

function paula() {
    $("body").css("background-color", "red");
}

function joni() {
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    $(this).attr("data-movie") + "&api_key=wx9p7JJJbTuqM9W2mB3pMgK9Jo0cJiGN&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='frames'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height_still.url);
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);
          $("#gifs-appear-here").prepend(gifDiv);
          $(".frames").on("click", paula);
    
        }
      });
        
    }
   






function kendrick() {


    

    if ($("#movie").val() == "") {
        alert("no");
    }

    else {
       

        $("#buttons").empty();
        topics.push(b);
        b.attr("id", $("#movie").val());
        b.attr("data-movie", $("#movie").val());

       
        setTimeout(function() { $("#buttons").append(topics); }, 0010);
       
            b.text($("#movie").val());
           $("#buttons").append(b);
            b.attr("class", "film");
            
            $(".film").on("click", joni);
            
            

}

}

});

