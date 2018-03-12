//      Marvel Trivial Trivia       //
$(document).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var time = 0;
    var counter = 10;
    var intervalId;

    var questions = ["Captain America's shield is made of?", "Which of these characters was not in the post-credits for Guardians of the Galaxy"];
    var answers = [["Titanium Alloy", "Mithril", "Adamantium", "Vibranium"],["The Collector","Adam Warlock","Cosmo the Space Dog","Howard the Duck"]];

    console.log(questions); //checking my arrays
    console.log(answers)

    function  run() {
        if(!intervalId && counter > 0) {
            var intervalId = setInterval(timer, 1000);
        }
    }
    function timer() {
        if (counter > 0) {
            counter--;
        }
        if (counter === 0) {
            alert("Time Up!");
            stop()
        }
        $("#counter").html("<h2>" + counter + "</h2>");
    }

    function stop() {
        clearInterval(intervalID);
        intervalID = undefined;
    }

    function mulipleChoices() {
        var marvel = "<h2 class='text-center'>Timer: <span class='timer'>" + counter + "</span></h2><h3 class='text-center'>"+ questions[counter] + "</h3><h3 class='answer'>A." + answers[counter][0] +"</h3><h3 class='answer'>B." + answers[counter][1] + "</h3><h3 class='answer'>C." + answers[counter][2] +"</h3><h3 class='answer'>D." + answers[counter][3] + "</h3>";
        $("#trivia").html(marvel);
        console.log("multipeChoices counter" + counter);
    }

    function reset() {
        run();
        timer();
    }    









}) 