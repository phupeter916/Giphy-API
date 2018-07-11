
$( document ).ready(function() {

    var topics = [ "cat", "dog", "bird", "fish", "rabbit", "tiger", "lion", "hamster", "chicken", "lizard", "panda", "bear", "cheetah", "panther",
                "deer", "elephant"]



    for(var i = 0; i< topics.length; i++) {
        //console.log([i]);

        var button = $("<button>");
        button.addClass("button");
        button.attr("data-animal", topics[i]);
        button.text(topics[i]);
        $(".buttons").append(button);
    }
    //create on click function for the buttons
    $(".button").on("click", function(){
        var x = $(this).data("animal");
        console.log(x);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=kY7zMd1FwZYw6X8Vip7M4hunFaiLvNkz&limit=10";

        $.ajax({url:queryURL,method:"GET"})
        .done(function(response){
            console.log(response);
        
                for(var i = 0; i < response.data.length; i++){
                    var animalDiv = $("<div>");
                    var p = $("<p>").text("Rating: "+response.data[i].rating);
                    var animalImage = $("<img>");
                    animalImage.attr("src", response.data[i].images.fixed_width.url);
                    animalImage.attr("data-still", response.data[i].images.fixed_width.url);
                    animalImage.attr("data-animate", response.data[i].images.fixed_width.url);
                    animalImage.addClass("gif")
                    animalImage.attr("data-state", "still");
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $(".image").prepend(animalDiv);
 

                 $(".gif").on("click", function() {
                     //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                     var state = $(this).attr("data-state");
                     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                     // Then, set the image's data-state to animate
                     // Else set src to the data-still value
                     if (state === "still") {
                       $(this).attr("src", $(this).attr("data-animate"));
                       $(this).attr("data-state", "animate");
                     } else {
                       $(this).attr("src", $(this).attr("data-still"));
                       $(this).attr("data-state", "still");
                     }
                   });

            }

            document.getElementById("searchText").value;
            console.log("searchText");

            

            








        })
    
    
    
    
    })    





});


