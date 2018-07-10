
$( document ).ready(function() {

    var topics = [ "cats", "dogs", "birds", "fish", "rabbit", "tiger", "lion", "hamster", "chicken", "lizard", "panda", "bear", "cheetah"]



    for(var i = 0; i<= topics.length; i++) {
        console.log([i]);

        //$(".buttons").append("<button>");
        //$(".buttons").addClass("button");
        //$(".button").text(topics);
        //console.log([topics]);
    
        //$(".buttons").text(topics);

        var button = $("<button>");

        button.addClass("button-main");

        $(".buttons").append(button);




    }




});



