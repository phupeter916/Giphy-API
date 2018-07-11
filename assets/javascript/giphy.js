
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
            for(var i = 0; i < response.data.length; i++){
                var animalDiv = $("<div>");
                var p = $("<p>").text("Rating: "+response.data[i].rating);
                var animalImage = $("<img>");
                animalImage.attr("src", response.data[i].images.fixed_height.url);
                animalDiv.append(p);
                animalDiv.append(animalImage);
                $(".image").prepend(animalDiv);

            }
            








        })
    
    
    
    
    })    





});


