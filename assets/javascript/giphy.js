
$( document ).ready(function() {

    var topics = [ "cats", "dogs", "birds", "fish", "rabbit", "tiger", "lion", "hamster", "chicken", "lizard", "panda", "bear", "cheetah"]



    for(var i = 0; i< topics.length; i++) {
        console.log([i]);

        var button = $("<button>");
        button.addClass("button");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $(".buttons").append(button);


        
    }




});


